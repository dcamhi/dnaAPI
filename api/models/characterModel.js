
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define model with character parameters
var CharacterSchema = new Schema({
	title: {
    type: String,
    required: 'The character needs a title.'
  },
  title: {
    type: String
  },
  info: {
    type: [{}]
  }
});

module.exports = mongoose.model('Characters', CharacterSchema);