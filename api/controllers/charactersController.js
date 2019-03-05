'use strict';

var mongoose = require('mongoose'),
  Character = mongoose.model('Characters');

// GET ALL CHARACTERS
exports.list_all_characters = function(req, res) {
  Character.find({}, function(err, character) {
    if (err)
      res.send(err);
    res.status(200).json(character);
  });
};

// CREATE NEW CHARACTER
exports.create_a_character = function(req, res) {
  var new_character = new Character(req.body);
  if (req.body.title==null){
    res.status(500).send("Character must have a title.");
  }else{
    new_character.save(function(err, character) {
      if (err)
        res.send(err);
      res.status(201).json(character);
    });
  }
};

// GET A SPECIFIC CHARACTER
exports.read_a_character = function(req, res) {
  Character.findById(req.params.characterId, function(err, character) {
    if (err)
      res.send(err);
    res.status(200).json(character);
  });
};

// UPDATE CHARACTER
exports.update_a_character = function(req, res) {
  Character.findOneAndUpdate({_id: req.params.characterId}, req.body, {new: true}, function(err, character) {
    if (err)
      res.send(err);
    res.status(200).json(character);
  });
};

// DELETE A CHARACTER
exports.delete_a_character = function(req, res) {
  Character.remove({
    _id: req.params.characterId
  }, function(err, character) {
    if (err)
      res.send(err);
    res.status(204).json({ message: 'Character deleted' });
  });
};
