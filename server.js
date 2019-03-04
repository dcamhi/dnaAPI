//SERVER CONFIGURATION
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Character = require('./api/models/characterModel'), //LOAD MODEL
  bodyParser = require('body-parser');

// mongoose CONNECT TO DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nds_user:Nearshor3.@ds021326.mlab.com:21326/characters');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/characterRoutes'); //importing route
routes(app); //register the route

app.listen(port);

//REDIRECT NOT FOUND ROUTES
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('characters RESTful API server on: ' + port);

