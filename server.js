// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var path = require("path");

port = 8000,
app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database connection, Schema, model

// Point server to views
app.set('views', path.join(__dirname, './client/views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port);
