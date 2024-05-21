//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'data/comments.json');
var comments = require(commentsPath);

//Serve static files
app.use(express.static('public'));

//Parse JSON
app.use(bodyParser.json());

//Get comments
app.get('/api/comments', function(req, res) {
    res.json(comments);
});

//Post comments
app.post('/api/comments', function(req, res) {
    var comment = {
        id: Date.now()
    };
}); // Add this closing curly brace
