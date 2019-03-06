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


router.post('/register',(req,res,next)=>{
  const checkUsernameQuery = `SELECT * FROM users WHERE email = ?;`;
  connection.query(checkUsernameQuery, [req.body.email],(err,results)=>{
    // console.log("=========Server insanity check")
    if(err){throw err};
    if(results.length === 0){
      console.log(req.body)
      const token = randToken.uid(50);
      const hash = bcrypt.hashSync(req.body.password);
      const insertUserQuery = `INSERT INTO users (userName,email,password,token)
      VALUES
      (?,?,?,?);`;
      connection.query(insertUserQuery,[req.body.userName, req.body.email, hash, token],(err2,results2)=>{
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

router.post('/login',(req,res,next)=>{
  const email = req.body.email;
  const password = req.body.password;
  const userName = req.body.userName;
  const selectUserQuery = `SELECT * FROM users WHERE userName = ?;`;
  // const hash = bcrypt.hashSync(req.body.password);
  connection.query(selectUserQuery, [userName],(error,results)=>{
    console.log("============login route hit")
    if(error)throw error
    if(results.length === 0){
      res.json({
        msg: "Bad User"
      })
    }else {
      
      const checkHash = bcrypt.compareSync(password, results[0].password)
      console.log(password,results[0].password)
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

module.exports = router;