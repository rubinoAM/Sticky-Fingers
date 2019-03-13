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
  //console.log(req.body);
});

//Friends
router.post('/friends',(req,res,next)=>{ //Challenge: Inner Join a table twice
  //console.log("friends Route:")
  //console.log(req.body.auth)
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
  //console.log("collection Route:")
  //console.log(req.body.auth)
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
    //console.log("collection query results")
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
      //console.log("data response from discogs")
      //console.log(data);
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
      //console.log(result);
    })
  })
})

router.post('/addrecord/', (req,res,next)=>{
  //console.log("add record route")
  // add record in to records - done
  // add a collectionrecords line
  // add the newly created collectionrecords reference to the collections table
  // add a cid in to the collectionRecords table
  const title = req.body.title;
  const artist = req.body.artist;
  const year = req.body.year;
  const genre = req.body.genre;
  const coverUrl = req.body.coverUrl;
  const userName = req.body.userName;
  // we have now added this record to our records table in the DB
  const addRecordQuery = `INSERT INTO records (name,artist,year,genre,coverUrl,available)
    VALUES (?,?,?,?,?,1);`;  //EXPLAIN available in TABLE
  connection.query(addRecordQuery,[title,artist,year,genre,coverUrl],(error3,results3)=>{
    if(error3){throw error3}
    //console.log(results);
  });
    // we now know the id of the collection of this user
  let collectionId;
  const uIdQuery = `SELECT id FROM users
    WHERE userName = ?;`;
  connection.query(uIdQuery,[userName],(error1,results1)=>{
    if(error1){throw error1}
    let uId = results1[0].id;
    const collectionQuery = `SELECT id FROM collections
      WHERE uid = ?`
    connection.query(collectionQuery,[uId],(error2,results2)=>{
      if(error2){throw error2}
      collectionId = results2[0].id
      let recId;
      const getRecIdQuery = `SELECT id FROM records
        WHERE name = ?
        AND artist = ?;`
      connection.query(getRecIdQuery,[title,artist],(error4,results4)=>{
        if(error4){throw error4}
        recId = results4[0].id;
        console.log("IDs below")
        const createCollectionRecordsQuery = `INSERT INTO collectionRecords (cid,rid)
        VALUES(?,?);`;
        connection.query(createCollectionRecordsQuery,[collectionId,recId],(error5,results5)=>{
          if(error5){throw error5}
          const getIdOnCollectionRecordsIdQuery = `SELECT id FROM collectionRecords
            WHERE cid = ?`
          connection.query(getIdOnCollectionRecordsIdQuery,[collectionId],(error6,results6)=>{
            if(error6){throw error6}
            crid = results6[0].id;
            const addIdToCollectionsQuery = `INSERT INTO collections (crid)
              VALUES(?);`;
            connection.query(addIdToCollectionsQuery,[crid],(error7,results7)=>{
              if(error7){throw error7}
              res.json({msg:"Record Added"})
            });
          });
        });
      });
    });
  });
  // we have now created a new line in collectionRecords,
  // we now need to add the newly made id on the collectionRecords table to the collections table as the crid
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
  //console.log(req.body);

  const token = req.body.token;
  const userName = req.body.userName;
  const targetQuery = `SELECT id FROM users
    WHERE userName = ?;`;

  connection.query(targetQuery,[userName],(err,results)=>{
    if(err){throw err}
    //console.log(results);
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
            res.json(dbPath);
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
  //console.log("community Route:")
  //console.log(req.body.auth)
  const currentUserName = req.body.auth.userName;
  const communityQuery = `SELECT userName, id, addressCity, avatarUrl
    FROM users
    WHERE userName != (?);`;
  connection.query(communityQuery, [currentUserName], (err,results)=>{
    if(err){throw err}
    res.json(results);
    //console.log("Community Query Results");
    //console.log(results);
  })
})

router.post('/trades',(req,res,next)=>{
  //console.log(req.body);
  const userName = req.body.auth.userName;
  const targetQuery = `SELECT id FROM users
    WHERE userName = ?;`;

  connection.query(targetQuery,[userName],(err,results)=>{
    if(err){throw err}
    //console.log(results);
    let userId = results[0].id;

    const getTradesQuery = `SELECT u2.userName,
      u1.addressStreet AS u1Street, u1.addressCity AS u1City, u1.addressState AS u1State, u1.addressZip AS u1Zip, 
      u2.addressStreet AS u2Street, u2.addressCity AS u2City, u2.addressState AS u2State, u2.addressZip AS u2Zip,
      r1.name AS r1Name, r1.artist AS r1Artist, r1.year AS r1Year, r1.genre AS r1Genre, r1.coverUrl AS r1CoverUrl,
      r2.name AS r2Name, r2.artist AS r2Artist, r2.year AS r2Year, r2.genre AS r2Genre, r2.coverUrl AS r2CoverUrl,
      dateStarted, dateEnded
      FROM trades
      INNER JOIN users u1 ON trades.u1id = u1.id
      INNER JOIN users u2 ON trades.u2id = u2.id
      INNER JOIN records r1 ON trades.r1id = r1.id
      INNER JOIN records r2 ON trades.r2id = r2.id
      WHERE trades.u1id = ? OR trades.u2id = ?;`;

    connection.query(getTradesQuery,[userId, userId],(err_2,results_2)=>{
      if(err_2){throw err_2}
      res.json(results_2);
      //console.log(results_2);
    });
  });
})

router.post('/addfriend', (req,res,next)=>{
  const currentUserName = req.body.auth.userName;
  const getCurrentUserIdQuery = `SELECT id FROM users 
    WHERE userName = (?);`;
  const newFriendId = req.body.newFriend.friend.id;
  const addFriendQuery = `INSERT INTO friendships (u1id, u2id)
    VALUES (?,?);`;
  connection.query(getCurrentUserIdQuery,[currentUserName],(err1,results1)=>{
    if(err1){throw err1}
    const currentUserId = results1[0].id;
    connection.query(addFriendQuery,[currentUserId,newFriendId],(err2,results2)=>{
      if(err2){throw err2}
      res.json(results2)
    })
  })
})

router.post('/makeTrade',(req,res,next)=>{
  //console.log(req.body);
  const startDate = req.body.startDate;
  const finishDate = req.body.finishDate;
  const recipientId = req.body.recipientId;
  const recipRec = req.body.recipRec;
  const yourRec = req.body.yourRec;
  const yourUserName = req.body.yourUserName;
  let yourId;
  let recipRecId;
  let yourRecId;

  const getYourIdQuery = `SELECT id FROM users WHERE userName = ?`;
  const getRecIdQuery = `SELECT id FROM records WHERE name = ? or name = ? LIMIT 2;`;
  const createTradeQuery = `INSERT INTO trades (u1id,u2id,r1id,r2id,dateStarted,dateEnded)
    VALUES (?,?,?,?,?,?);`;
  const updateRecQuery = `UPDATE records
    SET available = 0
    WHERE id = ? OR id = ?;`;
  const updateFriendshipQuery = `UPDATE friendships
    SET exchanges = exchanges + 1
    WHERE (u1id = ? AND u2id = ?) OR (u1id = ? AND u2id = ?);`;
  const returnAddressQuery = `SELECT addressStreet, addressCity, addressState, addressZip
    FROM users
    WHERE id = ? OR id = ?;`

  connection.query(getYourIdQuery,[yourUserName],(err,results)=>{
    if(err){throw err}
    yourId = results[0].id;

    connection.query(getRecIdQuery,[recipRec,yourRec],(err2,results2)=>{
      if(err2){throw err2}
      //console.log(results2);
      recipRecId = results2[0].id;
      yourRecId = results2[1].id;
      //console.log(recipRecId,yourRecId);

      connection.query(createTradeQuery,[yourId,recipientId,yourRecId,recipRecId,startDate,finishDate],(err3,results3)=>{
        if(err3){throw err3}
        //console.log(results3)
    
        connection.query(updateRecQuery,[yourRecId,recipRecId],(err4,results4)=>{
          if(err4){throw err4}
          //console.log(results4)
        })

        connection.query(updateFriendshipQuery,[yourRecId,recipRecId,recipRecId,yourRecId],(err5,results5)=>{
          if(err5){throw err5}
          //console.log(results5)
        })

        connection.query(returnAddressQuery,[yourId,recipientId],(err6,results6)=>{
          if(err6){throw err6}
          res.json(results6)
        })
      })
    })
  })
})

router.post("/makeTrade/pickFriend",(req,res,next)=>{
  //console.dir(Object.keys(req.body));
  let friendUserName = Object.keys(req.body)[0];
  //console.log(friendUserName);

  const friendCollectionQuery = `SELECT users.id AS userId, records.* FROM records
    INNER JOIN collectionRecords ON records.id = collectionRecords.rid
    INNER JOIN collections ON collectionRecords.cid = collections.id
    INNER JOIN users ON collections.uid = users.id
    WHERE userName = ?
    AND records.available = 1;`;

  connection.query(friendCollectionQuery,[friendUserName],(err,results)=>{
    if(err){throw err}
    res.json(results);
    //console.log(results);
  })
})

router.post("/makeTrade/pickFriendRecord",(req,res,next)=>{
  let recName = Object.keys(req.body)[0]
  res.json(recName);
})

router.post("/makeTrade/pickYourRecord",(req,res,next)=>{
  //console.log(req.body)
  let recName = Object.keys(req.body)[0]
  res.json(recName);
})

//VIEWING OTHER USERS
router.post('/people/:id',(req,res,next)=>{
  const userId = Object.keys(req.body)[0];
  //console.log(userId);
  let userFriends, userRecords, userTrades, userDetails, userInfo;

  const getPersonRecordsQuery = `SELECT records.name, records.coverUrl, records.artist
    FROM users
    INNER JOIN collections ON users.id = collections.uid
    INNER JOIN collectionRecords ON collections.id = collectionRecords.cid
    INNER JOIN records ON collectionRecords.rid = records.id
    WHERE users.id = ?;`;

  const getPersonInfoQuery = `SELECT userName, avatarUrl, tagline
    FROM users
    WHERE users.id = ?;`;

  const getPersonFriendsQuery = `SELECT u2.userName, u2.avatarUrl, users.userName, users.avatarUrl
    FROM users
    INNER JOIN friendships ON users.id = friendships.u1id
    INNER JOIN users u2 ON friendships.u2id = u2.id
    WHERE users.id = ? OR u2.id = ?;`;

  const getPersonTradesQuery = `SELECT u2.userName, r1.name AS r1Name, r2.name AS r2Name
    FROM trades
    INNER JOIN records r1 ON trades.r1id = r1.id
    INNER JOIN records r2 ON trades.r2id = r2.id
    INNER JOIN users u1 ON trades.u1id = u1.id
    INNER JOIN users u2 ON trades.u2id = u2.id
    WHERE u1.id = ? OR u2.id = ?;`;

  connection.query(getPersonRecordsQuery,[userId],(err,results)=>{
    if(err){throw err}
    userRecords = results;
    //console.log("Records:\n" + results)

    connection.query(getPersonFriendsQuery,[userId,userId],(err2,results2)=>{
      if(err2){throw err2};
      userFriends = results2;
      //console.log("Friends:\n" + results2);

      connection.query(getPersonTradesQuery,[userId,userId],(err3,results3)=>{
        if(err3){throw err3}
        userTrades = results3;
        //console.log("Trades:\n" + results3)

        connection.query(getPersonInfoQuery,[userId],(err4,results4)=>{
          if(err4){throw err4}
          userDetails = results4;
          userInfo = {
            userRecords,
            userFriends,
            userTrades,
            userDetails,
          }
          res.json(userInfo);
        })
      })
    })
  })
})

module.exports = router;