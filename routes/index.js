var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Gregs Travel Blog',
  	name: 'BOBO',
  	create:  'create',
  	preview: 'preview',
  	exportNav: 'export' 
});
});

module.exports = router;
