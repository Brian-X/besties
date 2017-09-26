
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3333;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './css')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './assets/apiRoutes'))(app);
require(path.join(__dirname, './assets/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("Besties is on a Mexican Radio: " + PORT);
});