'use strict';
//DNA COLLECTION
var mongoose = require('mongoose'),
  Dna = mongoose.model('Dna');
  
//STATS COLLECTION
var mongoose2 = require('mongoose'),
  Stats = mongoose2.model('Stats');

// GET STATS
exports.get_stats = function(req, res) {
  Stats.findOne({}, function(err, character) {
    if (err)
      res.send(err);
    res.status(200).json(character);
  });
};

// GET ALL DNA RECORDS
exports.list_all_dna = function(req, res) {
  Dna.find({}, function(err, character) {
    if (err)
      res.send(err);
    res.status(200).json(character);
  });
};

// VALIDATE DNA AND INSERT IF VALID
exports.validate_dna = function(req, res) {
  
  //CHECK IF INPUT IS MUTATION
  var mutation = hasMutation(req.body.dna);

  // IF HAS MUTATION, INSERT INTO DB AND INCREMENT THE COUNT
  if(mutation){
   
    // INSERT INTO DATABASE IF IT DOESN'T EXIST
    Dna.findOneAndUpdate({dna: [req.body.dna]}, req.body, {upsert: true}, function(err) {
      if (err)
        res.send(err);
      res.status(200).json("OK");
    });
    
    // UPDATE DNA STATS USING PREVIOUS VALUES
    Stats.findOne({}, function(err,stats) {

      if (err)
        res.send(err);

      // DIVISION BY 0 VALIDATION
      if(stats.count_no_mutation==0){
        var modify = { "count_mutations": stats.count_mutations+1,"count_no_mutation": stats.count_no_mutation,"ratio": 0};
      }else{
        var modify = { "count_mutations": stats.count_mutations+1,"count_no_mutation": stats.count_no_mutation,"ratio": (stats.count_mutations+1)/stats.count_no_mutation};
      }
      
      //UPDATE
      Stats.findOneAndUpdate({},modify, {upsert: false}, function(err) {
        if (err)
          res.send(err);
      });

    });
  }else{
    //IF DOES NOT HAVE MUTATION ONLY MODIFY STATS
    Stats.findOne({}, function(err,stats) {
      if (err)
        res.send(err);

      if(stats.count_no_mutation==0){
        var modify = { "count_mutations": stats.count_mutations,"count_no_mutation": stats.count_no_mutation+1,"ratio": 0};
      }else{
        var modify = { "count_mutations": stats.count_mutations,"count_no_mutation": stats.count_no_mutation+1,"ratio": (stats.count_mutations)/stats.count_no_mutation+1};
      }
      
      Stats.findOneAndUpdate({},modify, {upsert: false}, function(err) {
        if (err)
          res.send(err);
      });

    });
    res.status(403).json("Forbidden");
  } 
};


// FUNCTION TO TRANSPOSE A MATRIX
function transpose(a) {
  return Object.keys(a[0]).map(function(c) {
      return a.map(function(r) { return r[c]; });
  });
}

// FUNCTION TO CHECK IF DNA HAS MUTATION
function hasMutation(dna_string) {
  //VARIABLES
  var matrix = [];
  var list = []

  //CONVERT TO MATRIX AND INSERT IN LIST ROWS AND INVERSE ROWS SEQUENCES
  for (let i = 0; i < dna_string.length; i++) {
    matrix[i] = dna_string[i].split('');
    list.push(matrix[i].join(""));
    list.push(matrix[i].reverse().join(""));
    matrix.reverse();
  }

  //GET DIAGONAL
  var diag = "";
  for (let i = 0; i < matrix.length; i++) {
    diag =  diag + matrix[i][i];
  }

  //TRANSPOSE MATRIX AND INSERT IN LIST COLS AND IVERSE COLS SEQUENCES
  var transposed = transpose(matrix);
  for (let i = 0; i < transposed.length; i++) {
    list.push(transposed[i].join(""));
    list.push(transposed[i].reverse().join(""));
  }

  // ADD DIAGONAL AND INVERSE DIAGONAL SEQUENCES TO LIST
  list.push(diag);
  diag = diag.split(""); 
  diag = diag.reverse();
  diag = diag.join("");
  list.push(diag);

   //CHECK IF LIST HAS DUPLICATE VALUES
   let hasDup = list.some((val,i)=>{
    return list.indexOf(val)!=i
  });
  
  return hasDup;
}