
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define model with Dna parameters
var StatsSchema = new Schema({
	count_no_mutation: {
    type: Number
  },
  count_mutations: {
    type: Number
  },
  ratio: {
    type: Number
  }
},{
  collection:"stats"
});

module.exports = mongoose.model('Stats', StatsSchema);