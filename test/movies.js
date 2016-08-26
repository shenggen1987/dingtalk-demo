var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('moives', function(){
	it('should moives getById GET', function(){
		chai.request(server)
			.get('api/movies/getById?id=57bee0eae77d230a78db445a')
			.end(function(err ,res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('name');
				res.body.name.should.equal('lsg');
				done();
			});
	});

	it('should moives list GET');

});