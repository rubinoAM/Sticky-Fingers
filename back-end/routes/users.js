var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();

//Main Users Route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Friends
router.get('/friends',(req,res,next)=>{
  const friendsQuery = `SELECT *
    FROM friendships
    INNER JOIN users ON friendships.u1id = users.id
    WHERE users.id = 1;`;

  connection.query(friendsQuery,(err,results)=>{
    if(err){throw err}
    res.json(results);
    console.log(results);
  })
})

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
    console.log(results)
  })

  // const tracksQuery = `SELECT * FROM tracks WHERE rid = `
})

module.exports = router;
