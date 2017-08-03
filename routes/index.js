var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Beer App' });
});


// router.get('/users', function(req, res) {
//   res.render('users', { title: 'USER PAGE' });
// });



module.exports = router;