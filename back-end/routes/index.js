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

module.exports = router;
