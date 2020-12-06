import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { invalidEmail, userLogin, wrongCredentials } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/POST login with email and password', () => {
	it('Should be successfully logged in', (done) => {
		chai.request(app)
			.post('/api/auth/login')
			.send(userLogin)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(401);
				res.body.should.have.property('message');
				done();
			});
	});

	it('should not pass with the wrong information', (done) => {
		chai.request(app)
			.post('/api/auth/login')
			.send(wrongCredentials)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(401);
				res.body.should.have.property('message');
				done();
			});
	});

	it('should a valid email', (done) => {
		chai.request(app)
			.post('/api/auth/login')
			.send(invalidEmail)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});
});
