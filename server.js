// ENV VARIABLES
const dotenv = require('dotenv');
dotenv.config();

// SERVER CONFIGURATION
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Stats = require('./api/models/statsModel'), //LOAD MODEL
  Dna = require('./api/models/dnaModel'), //LOAD MODEL

  bodyParser = require('body-parser');


// MONGOOSE CONNECTION TO DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true });

// BODY PARSER FOR REQUESTS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// IMPORT AND REGISTER ROUTES
var routes = require('./api/routes/dnaRoutes'); 
routes(app); 

app.listen(port);

// REDIRECT NOT FOUND ROUTES
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// INIT MESSAGE
console.log('DNA RESTful API server on: ' + port);

