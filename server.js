// ENV VARIABLES
const dotenv = require('dotenv');
dotenv.config();

// SERVER CONFIGURATION
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Character = require('./api/models/characterModel'), //LOAD MODEL
  bodyParser = require('body-parser');


// MONGOOSE CONNECTION TO DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

// BODY PARSER FOR REQUESTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// IMPORT AND REGISTER ROUTES
var routes = require('./api/routes/characterRoutes'); 
routes(app); 

app.listen(port);

// REDIRECT NOT FOUND ROUTES
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// INIT MESSAGE
console.log('characters RESTful API server on: ' + port);

