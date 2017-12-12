// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App

var mongoose = require('mongoose');

express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
port = 8000,
app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quotes_data');

const quoteSchema = new mongoose.Schema({
name: String,
quote: String
});

const Quote = mongoose.model('quotes', quoteSchema);

// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

// Here are our routes!
app.get('/', function(req, res) {
res.render('index');
});

app.get('/quotes', function(req, res) {
// Logic to grab all quotes and pass into the rendered view
Quote.find({}, function(err, quotes) {
if (err) { console.log(err); }
res.render('quotes', { quotes: quotes });
});
});

app.post('/quotes', function(req, res) {
Quote.create(req.body, function(err) {
if (err) { console.log(err); }
res.redirect('/quotes');
});
});
// END OF ROUTING...

app.listen(port);
