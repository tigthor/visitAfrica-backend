import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { user, userValidate, userEmailExist, createUser } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/POST signup and emailsending on success', () => {
	before(async () => {
		await createUser();
	});
	it('Should register a user and send email on success', (done) => {
		chai.request(app)
			.post('/api/auth/signup')
			.send(user)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(201);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate user inputs', (done) => {
		chai.request(app)
			.post('/api/auth/signup')
			.send(userValidate)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});
	it('Should check if email exists', (done) => {
		chai.request(app)
			.post('/api/auth/signup')
			.send(userEmailExist)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(409);
				res.body.should.have.property('message');
				done();
			});
	});
});
