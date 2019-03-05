'use strict';
module.exports = function(app) {
  
// INCLUDE CONTROLLER
  var characters = require('../controllers/charactersController');	

// DEFINE CHARACTER ROUTES
	var version = '/api/v1'
  app.route(version+'/characters')
    .get(characters.list_all_characters)
    .post(characters.create_a_character);


  app.route(version+'/characters/:characterId')
    .get(characters.read_a_character)
    .put(characters.update_a_character)
    .delete(characters.delete_a_character);
};
