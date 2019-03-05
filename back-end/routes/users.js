var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//Friends
router.get('/friends',(req,res,next)=>{

})

//Collection

module.exports = router;
