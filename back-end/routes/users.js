const fs = require('fs');
var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.db);
connection.connect();

var Discogs = require('disconnect').Client;
var db = new Discogs(config.discogs).database();

const multer = require('multer');
const upload = multer({dest:'public/images/'});

//Main Users Route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req.body);
});

//Friends
router.post('/friends',(req,res,next)=>{ //Challenge: Inner Join a table twice
  console.log("friends Route:")
  console.log(req.body.auth)
  const currentUserName = req.body.auth.userName;
  const friendsQuery = `SELECT u2.userName, u2.id, friendships.friendSince, friendships.exchanges, u2.avatarUrl
    FROM friendships
    INNER JOIN users u1 ON friendships.u1id = u1.id
    INNER JOIN users u2 ON friendships.u2id = u2.id
    WHERE u1.userName = ?;`;

  connection.query(friendsQuery, [currentUserName], (err,results)=>{
    if(err){throw err}
    res.json(results);
    //console.log(results);
  })
});

//Collection
router.post('/collection',(req,res,next)=>{
  console.log("collection Route:")
  console.log(req.body.auth)
  const currentUserName = req.body.auth.userName;
  const collectionQuery = `SELECT * FROM records 
    INNER JOIN collectionRecords ON collectionRecords.rid = records.id
    INNER JOIN collections ON collections.id = collectionRecords.cid
    INNER JOIN users ON collections.uid = users.id
    WHERE users.userName = (?);`;
  connection.query(collectionQuery, [currentUserName], (error,results)=>{
    // console.log(results)
    if(error){throw error}
    // const record = results;
    res.json(results)
    console.log("collection query results")
    console.log(results)
  })

  // const tracksQuery = `SELECT * FROM tracks WHERE rid = `
})

router.get('/addrecord/:title/:artist', (req,res,next)=>{
  const title = req.params.title;
  const artist = req.params.artist;

  let searchQuery = {
    query:`${title} ${artist}`,
    params:{
        param1:'artist',
        param2:'release_title',
    },
  }

  const discogsPromise = new Promise((resolve, reject)=>{
      db.search(searchQuery,(err,data)=>{
          if(err){throw err}
          let results = data.results[0];
          resolve(results.master_id);
      })
  })

  discogsPromise.then((promiseData)=>{
    //console.log(promiseData);
    db.getMaster(promiseData,(err,data)=>{
      /*console.log(data);
      console.log('Title: ' + data.title);
      console.log('Artist: ' + data.artists[0].name);
      console.log('Genre: ' + data.styles[0]);
      console.log('Year: ' + data.year);
      console.log('Image URL: ' + data.images[0].uri);*/

      console.log(data);
      const title = data.title;
      const artist = data.artists[0].name;
      let genre = '';
      if(!data.styles){
        genre = data.genres[0];
      } else {
        genre = data.styles[0];
      }
      const year = data.year;
      const imageUrl = data.images[0].uri;

      const result = {
        title,
        artist,
        genre,
        year,
        imageUrl,
      }
      res.json(result);
      console.log(result);
    })
  })
})

router.post('/addrecord/', (req,res,next)=>{
  console.log(req.body);

  const title = req.body.title;
  const artist = req.body.artist;
  const year = req.body.year;
  const genre = req.body.genre;
  const coverUrl = req.body.coverUrl;
  const userName = req.body.userName;

  let uId;
  const uIdQuery = `SELECT id FROM users
    WHERE userName = ?;`;
  
  connection.query(uIdQuery,[userName],(error,results)=>{
    if(error){throw error}
    uId = results[0].id;
  })

  const addRecordQuery = `INSERT INTO records (name,artist,year,genre,coverUrl,available)
    VALUES (?,?,?,?,?,1);`;  //EXPLAIN available in TABLE

  connection.query(addRecordQuery,[title,artist,year,genre,coverUrl],(err,results)=>{
    if(err){throw err}
    //console.log(results);
  });

  let recId;
  const getRecIdQuery = `SELECT id FROM records
    WHERE name = ?
    AND artist = ?;`

  connection.query(getRecIdQuery,[title,artist],(err,results)=>{
    if(err){throw err}
    recId = results[0].id;
    //console.log(recId);
    const currentUserName = req.body.auth.userName;
    const connectRecToCollectionQuery = `INSERT INTO collectionRecords (cid,rid)
    VALUES(?,?)`;

    connection.query(connectRecToCollectionQuery,[uId,recId],(err,results)=>{
      if(err){throw err}
      //console.log(results);
    })
  });
});

router.post('/profileCreation',(req,res,next)=>{
  //console.log(req.body);
  const tagline = req.body.registerData.tagline;
  const addStreet = req.body.registerData.addStreet;
  const addCity = req.body.registerData.addCity;
  const addState = req.body.registerData.addState;
  const addZip = req.body.registerData.addZip;
  const userToken = req.body.token;
  const userName = req.body.userName;

  const profileDetailsQuery = `UPDATE users
    SET tagline = ?, addressStreet = ?, addressCity = ?, addressState = ?, addressZip = ?
    WHERE userName = ?;`;

  //console.log(tagline,addStreet,addCity,addState,addZip);
  
  connection.query(profileDetailsQuery,[tagline,addStreet,addCity,addState,addZip,userName],(err,results)=>{
    if(err){throw err}
    res.json({msg:'Profile Successfully Populated'});
    //console.log(results);
    //res.redirect('/dashboard')
  })
});

router.post('/profileAvatar',upload.single('avatar'),(req,res,next)=>{
  const tempPath = req.file.path;
  console.log(req.body);

  const token = req.body.token;
  const userName = req.body.userName;
  const targetQuery = `SELECT id FROM users
    WHERE userName = ?;`;

  connection.query(targetQuery,[userName],(err,results)=>{
    if(err){throw err}
    console.log(results);
    let lastId = results[0].id;
    const targetPath = "public/images/avy_" + lastId + ".jpg";
    const dbPath = "avy_" + lastId + ".jpg"
    fs.readFile(tempPath,(err,fileContents)=>{
      if(err){throw err}
      fs.writeFile(targetPath,fileContents,(error_2)=>{
        if(error_2){throw error_2}
        const insertAvatarQuery = `UPDATE users
          SET avatarUrl = ?
          WHERE id = ?;`

        connection.query(insertAvatarQuery,[dbPath,lastId],(dbErr,dbResults)=>{
          if(dbErr){throw dbErr}
          else{
            res.json('/');
          }
        })

        fs.unlink(req.file.path,(err)=>{
          if(err){throw err}
        });
      })
    })
  })
});

//Community
router.post('/community', (req,res,next)=>{
  console.log("community Route:")
  console.log(req.body.auth)
  const currentUserName = req.body.auth.userName;
  const communityQuery = `SELECT userName, id, addressCity, avatarUrl
    FROM users
    WHERE userName != (?);`;
  connection.query(communityQuery, [currentUserName], (err,results)=>{
    if(err){throw err}
    res.json(results);
    console.log("Community Query Results");
    console.log(results);
  })
})

router.get('/trades',(req,res,next)=>{
  const userName = req.body.userName;
  const targetQuery = `SELECT id FROM users
    WHERE userName = ?;`;

  connection.query(targetQuery,[userName],(err,results)=>{
    if(err){throw err}
    console.log(results);
    let userId = results[0].id;

    const getTradesQuery = `SELECT * FROM trades
      WHERE u1id = 1
      OR u2id = 2;`;

    connection.query(getTradesQuery,[userId, userId],(err_2,results_2)=>{
      if(err_2){throw err_2}
      console.log(results_2);
    });
  });
})


router.post("/makeTrade",(req,res,next)=>{
  
})

router.post("/addFriend", (req,res,next)=>{
  const addFriendQuery = `INSERT INTO friendships (u1id, u2id)
    VALUES (?,?)`
    // results.insertId
  const newFriendId = req.body.friend.id;
  connection.query(addFriendQuery,[1,newFriendId],(err,results)=>{
    if(err){throw err}
    console.log("addfriend")
    console.log(req.body)
  })

})

router.post('/people/:id',(req,res,next)=>{
  
})

module.exports = router;