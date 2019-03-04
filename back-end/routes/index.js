var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register',(req,res)=>{
  const checkUsernameQuery = `SELECT * FROM users WHERE email = ?;`;
  connection.query(checkUsernameQuery, [req.body.email],(err,results)=>{
    // console.log("=========Server insanity check")
    if(err){throw err};
    if(results.length === 0){
      console.log("there is no spoon")
      const token = randToken.uid(50);
      const hash = bcrypt.hashSync(req.body.password);
      const insertUserQuery = `INSERT INTO users (email,password,token)
      VALUES
      (?,?,?);`;
      connection.query(insertUserQuery,[req.body.email, hash, token],(err2,results2)=>{
        if(err2){throw err2;}
        res.json({
          msg: "User Added",
          token,
          email: req.body.email,
        })
      });
    } else {
      console.log("there is a spoon")
      res.json({msg: "User Exists"})
    }
  })
})

router.post('/login',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const selectUserQuery = `SELECT * FROM users WHERE email = ?;`;
  connection.query(selectUserQuery, [email],(error,results)=>{
    if(error)throw error
    if(results.length === 0){
      res.json({
        msg: "Bad User"
      })
    }else {
      const checkHash = bcrypt.compareSync(password, results[0].password)
      if(checkHash){
        const token = randToken.uid(50);
        const updateTokenQuery = `UPDATE users SET token = ?
          WHERE email = ?`
          connection.query(updateTokenQuery, [token,email],(error2,results2)=>{
          if(error2){throw error2}
        })
        res.json({
          msg: "Login Success",
          token,
          email,
        })
      }else{
        console.log("=========Server insanity check - bad password")
        res.json({
          msg: "Bad Password"
        })
      }
    }
  })
})

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
