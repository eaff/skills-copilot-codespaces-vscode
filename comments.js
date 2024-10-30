// create web server
var express = require('express');
var app = express();
var fs = require('fs');

// create web server
app.get('/', function(req, res) {
  res.send('Hello World');
});

// create a route for the comments page
app.get