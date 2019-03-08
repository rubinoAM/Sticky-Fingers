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
router.get('/friends',(req,res,next)=>{ //Challenge: Inner Join a table twice
  const friendsQuery = `SELECT u2.userName, u2.id, friendships.friendSince, friendships.exchanges, u2.avatarUrl
    FROM friendships
    INNER JOIN users u1 ON friendships.u1id = u1.id
    INNER JOIN users u2 ON friendships.u2id = u2.id
    WHERE u1.id = 1;`;

  connection.query(friendsQuery,(err,results)=>{
    if(err){throw err}
    res.json(results);
    //console.log(results);
  })
});

//Collection
router.get('/collection',(req,res,next)=>{
  // pull all records from the records table where 
  // (the uid in the collections table = the current user), 
  // (the crid of those items = rid in collection-records table)

  // pull the records who have an id that is within rid of the collection-records table, that has a cid
  // pull the user id of the current user, 
  
  // correct one that works:
  const collectionQuery = `SELECT * FROM records 
    INNER JOIN collectionRecords ON collectionRecords.rid = records.id
    INNER JOIN collections ON collections.id = collectionRecords.cid
    INNER JOIN users ON collections.uid = users.id
    WHERE users.id = 1;`;

  // const collectionQuery = `SELECT * FROM records 
  // //   INNER JOIN collectionRecords ON collectionRecords.rid = records.id
  // //   INNER JOIN collections ON collections.id = collectionRecords.cid
  // //   INNER JOIN users ON collections.uid = users.id
  // //   WHERE users.id = ?;`;

  // INNER JOIN users ON {auth.token} = 
  // pull the collection that belongs to the current user
  // we know its the current user by what auth.token contains.

  // const userIdQuery = `SELECT id FROM users WHERE email = the current users email`

  // const collectionQuery = `SELECT * FROM records INNER JOIN`

  console.log("collection route has been hit")

  connection.query(collectionQuery,(error,results)=>{
    // console.log(results)
    if(error){throw error}
    // const record = results;
    res.json(results)
    //console.log(results)
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
      const genre = data.styles[0];
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
  //console.log(req);

  const title = req.body.title;
  const artist = req.body.artist;
  const year = req.body.year;
  const genre = req.body.genre;
  const coverUrl = req.body.coverUrl;

  const addRecordQuery = `INSERT INTO records (name,artist,year,genre,coverUrl)
    VALUES (?,?,?,?,?);`;  

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

    const connectRecToCollectionQuery = `INSERT INTO collectionRecords (cid,rid)
    VALUES(1,?)`;

    connection.query(connectRecToCollectionQuery,[recId],(err,results)=>{
      if(err){throw err}
      console.log(results);
    })
  });
});

router.post('/profileCreation',(req,res,next)=>{
  const tagline = req.body.tagline;
  const addStreet = req.body.addStreet;
  const addCity = req.body.addCity;
  const addState = req.body.addState;
  const addZip = req.body.addZip;

  const profileDetailsQuery = `INSERT INTO users (tagline,addressStreet,addressCity,addressState,addressZip)
    VALUES
    (?,?,?,?,?)`

  console.log(tagline,addStreet,addCity,addState,addZip);
  
  // connection.query(profileDetailsQuery,[tagline,addStreet,addCity,addState,addZip],(err,results)=>{
  //   if(err){throw err}
  //   res.redirect('/dashboard')
  // })
});

router.post('/profileAvatar',upload.single('avatar'),(req,res,next)=>{
  const tempPath = req.body.avatar;
  let userId;
  const targetQuery = `SELECT * FROM users WHERE id = ?`;
  console.log(tempPath);

  /* connection.query(targetQuery,[userId],(err,results)=>{
    if(err){throw err}
    const targetPath = "public/images/avy_" + userId + ".jpg";
    const dbPath = "avy_" + userId + ".jpg"
    fs.readFile(tempPath,(err,fileContents)=>{
      if(err){throw err}
      fs.writeFile(targetPath,fileContents,(error_2)=>{
        if(error_2){throw error_2}
        const insertAvatarQuery = `INSERT INTO users (avatarUrl)
          VALUES (?)`

        connection.query(insertAvatarQuery,[dbPath],(dbErr,dbResults)=>{
          if(dbErr){throw dbErr}
          else{
            res.redirect('/dashboard');
          }
        })
      })
    })
  }) */
});

router.post('/community', (req,res,next)=>{
  // set variables for any locals i need
  // set a variable for my query
  // connection.query to run the query
  console.log(req.body.auth)

  
  // const currentUserId = `SELECT id FROM users WHERE token != ${req}`
  const currentUserId = `SELECT * FROM users;`
  connection.query(currentUserId,(error,results)=>{
    if(error){throw error}
    res.json(results);
    // console.log(results);
  })

  // const communityQuery = `SELECT userName, email, addressStreet, addressCity, addressState, addressZip, avatarUrl, tagline FROM users WHERE id != ${currentUserId};`;
  // // make sure it doesnt pull yourself or anyone who is already friends with you
  // connection.query(communityQuery,(error,results)=>{
  //   if(error){throw error}
  //   res.json(results);
  //   console.log(results);
  // })

})

module.exports = router;