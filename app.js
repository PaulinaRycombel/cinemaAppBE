var express = require('express');
var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/moviedb');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/movies');
});

app.listen(5000);
console.log('Running on port 5000...');