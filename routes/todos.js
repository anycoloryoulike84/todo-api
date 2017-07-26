// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('todos', { 
//   	title: 'Todo App',
//   	name: 'create a new todo list'
//   	 });
// });

// module.exports = router;



var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var todo = require('../models/todo.js');


/* GET /todos listing. */
router.get('/', function(req, res, next) {
  todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* GET /todos/:id by ID. */
router.get('/:id', function(req, res, next) {
        // Use 'req.params.name' to return name or 'req.params.id' to return id
  todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Create new field in doc
/* POST /todos */
router.post('/', function(req, res, next) {
  todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


// EDIT field in doc
/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});










module.exports = router;













