//TESTING API LIBRARIES
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';
var inserted_id = 0;

// CREATE A NEW CHARACTER
describe('Insert a character: ',()=>{
	it('should insert a character', (done) => {
		chai.request(url)
			.post('/api/v1/characters')
			.send({title: "David Camhi",details:{ Personal : {"Nationality":"Mexican","Age":"26"}}, info:{ Background : {"1":"Mechatronics Engineer from IPN","2":"Fast learner, passionate, and dedicated."}, Appearance: {"1":"Born in January 1993 in Mexico City"},Abilities:{"1":"David learns new things in a matter of hours, and he can make even the most serious person laugh."}}})
			.end( function(err,res){
                console.log(res.body)
                inserted_id = res.body._id;
				expect(res).to.have.status(201);
				done();
			});
	});
});

// CREATE NEW CHARACTER (WITHOUT TITLE)
describe('Insert a character with error: ',()=>{
	it('should receive an error', (done) => {
		chai.request(url)
            .post('/api/v1/characters')
			.send({details:{ Personal : {"Nationality":"Mexican","Age":"26"}},info:{ Background : {"1":"Mechatronics Engineer from IPN","2":"Fast learner, passionate, and dedicated."}, Appearance: {"1":"Born in January 1993 in Mexico City"},Abilities:{"1":"David learns new things in a matter of hours, and he can make even the most serious person laugh."}}})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});
});

// GET ALL CHARACTERS
describe('get all characters: ',()=>{
	it('should get all characters', (done) => {
		chai.request(url)
			.get('/api/v1/characters')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});
});

// GET SPECIFIC CHARACTER
describe('get the character with previously inserted id',()=>{
	it('should get the country with id:'+inserted_id, (done) => {
		chai.request(url)
			.get('/api/v1/characters/'+inserted_id)
			.end( function(err,res){
				console.log(res.body)
				expect(res.body).to.have.property('_id').to.be.equal(inserted_id);
				expect(res).to.have.status(200);
				done();
			});
	});
});

// UPDATE SPECIFIC CHARACTER
describe('update the title of previously inserted character ',()=>{
	it('should update a specific title of character', (done) => {
		chai.request(url)
            .put('/api/v1/characters/'+inserted_id)
            .send({title: "David Camhi de la Tejera"})
			.end( function(err,res){
				console.log(res.body)
				expect(res.body).to.have.property('title').to.be.equal("David Camhi de la Tejera");
				expect(res).to.have.status(200);
				done();
			});
	});
});

// DELETE A CHARACTER
describe('delete the character with previously inserted id'+inserted_id,()=>{
	it('should delete the character', (done) => {
		chai.request(url)
			.get('/api/v1/characters')
			.end( function(err,res){
				console.log(res.body)
				expect(res.body).to.have.lengthOf(1241);
				expect(res).to.have.status(200);
				chai.request(url)
					.del('/api/v1/characters/'+inserted_id)
					.end( function(err,res){
						console.log(res.body)
						expect(res).to.have.status(204);
						chai.request(url)
                            .get('/api/v1/characters')
                            .end( function(err,res){
								console.log(res.body)
								expect(res.body).to.have.lengthOf(1240);
								expect(res).to.have.status(200);
								done();
						});
					});
			});
	});
});