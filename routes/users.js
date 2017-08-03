
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user_model.js');



/* GET /users listing. */


router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET /todos/:id by ID. */
router.get('/:id', function(req, res, next) {
        // Use 'req.params.name' to return name or 'req.params.id' to return id
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Create new field in doc
/* POST /todos */
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


// EDIT field in doc
/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});










module.exports = router;



