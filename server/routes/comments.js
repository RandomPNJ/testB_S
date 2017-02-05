// routes/comments.js

// DEPENDENCY
var express     = require('express');
var db    = require('../config/database');


var router = express.Router();

router.get('/', function(req, res, next){

    res.render('index');

    // Go to next call
    next();

});


router.get('/api/comments', function(req, res){

    var results = localStorage.get('comments');
    res.json(results);
});


router.post('/api/comments', function(req, res, next){


    var newComment = {
        username    :   req.body.username,
        email       :   req.body.email,
        commentText :   req.body.commentText,
        date        :   new Date()
    };

});


