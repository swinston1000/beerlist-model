var express = require('express');
var bodyParser = require('body-parser')

var Beer = require('./beerModel.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/beers', {
  useMongoClient: true,
});

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Handles Success / Failure , and Returns data
var handler = function(res, next) {
  return function(err, data) {
    if (err) {
      return next(err);
    }
    res.send(data);
  }
};

app.get('/beers', function(req, res, next) {
  Beer.find(handler(res, next));
});

app.post('/beers', function(req, res, next) {
  Beer.create(res.body, handler(res, next));
});


// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(8000, function() {
  console.log("yo yo yo, on 8000!!")
});
