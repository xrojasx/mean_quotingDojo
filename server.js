// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');

var path = require("path");

port = 8000,
app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quotes_data');

var quoteSchema = new mongoose.Schema({
name: String,
quote: String
});
const Quote = mongoose.model('quotes', quoteSchema);

// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port);
