//TESTING API LIBRARIES
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';
var inserted_id = 0;

// DNA WITH MUTATION
describe('Validate a DNA with mutation: ',()=>{
	it('Should return true, insert the DNA sequence if it doesnt exist and increment the count', (done) => {
		chai.request(url)
			.post('/api/v1/mutation')
			.send({dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]})
			.end( function(err,res){
				expect(res).to.have.status(200);
				done();
			});
	});
});

// DNA WITHOUT MUTATION
describe('Validate a DNA without mutation: ',()=>{
	it('Should return Forbidden and increment the count of dna without mutation', (done) => {
		chai.request(url)
			.post('/api/v1/mutation')
			.send({dna: ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]})
			.end( function(err,res){
				expect(res).to.have.status(403);
				done();
			});
	});
});


// GET ALL STORED DNA 
describe('get all dna with mutation: ',()=>{
	it('should get all characters', (done) => {
		chai.request(url)
			.get('/api/v1/mutation')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});
});

// GET STADISTICS
describe('get all dna with mutation: ',()=>{
	it('should get all characters', (done) => {
		chai.request(url)
			.get('/api/v1/stats')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});
});

