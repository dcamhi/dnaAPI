
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define model with Dna parameters
var DnaSchema = new Schema({
	dna: {
    type: String
  }
  },{
    collection: "dna"
});

module.exports = mongoose.model('Dna', DnaSchema);