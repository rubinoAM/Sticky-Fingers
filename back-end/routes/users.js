var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.db);
connection.connect();

var Discogs = require('disconnect').Client;
var db = new Discogs(config.discogs).database();

//Main Users Route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
  
  const collectionQuery = `SELECT * FROM records 
    INNER JOIN collectionRecords ON collectionRecords.rid = records.id
    INNER JOIN collections ON collections.id = collectionRecords.cid
    INNER JOIN users ON collections.uid = users.id
    WHERE users.id = 1;`;
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

module.exports = router;