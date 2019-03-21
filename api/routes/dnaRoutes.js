'use strict';
module.exports = function(app) {

// INCLUDE CONTROLLER
  var dna = require('../controllers/dnaController');	

// DEFINE CHARACTER ROUTES
	var version = '/api/v1'
  app.route(version+'/mutation/')
    .get(dna.list_all_dna)
    .post(dna.validate_dna);


  app.route(version+'/stats')
  .get(dna.get_stats);

};
