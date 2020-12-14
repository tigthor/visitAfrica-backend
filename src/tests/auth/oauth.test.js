import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { googleAuth, facebookAuth } from '../../middlewares/user.middleware';
import { googleFakeUser, facebookFakeUser } from '../fixtures/user.fixture';

chai.use(chaiHttp);

const oauthTest = () => {
	describe('/GET Google login', () => {
		before(() => {
			const profile = googleFakeUser;
			let accessToken;
			let refreshToken;
			let done;
			googleAuth(accessToken, refreshToken, profile, done);
		});
		it('should return 200 if a new user', (done) => {
			chai
				.request(app)
				.get('/api/auth/test/google')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should return 200 if user already exists', (done) => {
			chai
				.request(app)
				.get('/api/auth/test/google')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should access google oauth route', (done) => {
			chai
				.request(app)
				.get('/api/auth/google')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
				});
			done();
		});
		it('should access google redirection route oauth route', (done) => {
			chai
				.request(app)
				.get('/api/auth/google/redirect')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
				});
			done();
		});
	});

	describe('Test Facebook login', () => {
		before(() => {
			const profile = facebookFakeUser;
			let accessToken;
			let refreshToken;
			let done;
			facebookAuth(accessToken, refreshToken, profile, done);
		});
		it('should return 201 if a new user', (done) => {
			chai
				.request(app)
				.get('/api/auth/test/facebook')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should return 200 if user already exists', (done) => {
			chai
				.request(app)
				.get('/api/auth/test/facebook')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should access facebook auth route', (done) => {
			chai
				.request(app)
				.get('/api/auth/facebook')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
				});
			done();
		});
		it('should access facebook redirect auth route', (done) => {
			chai
				.request(app)
				.get('/api/auth/facebook/redirect')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
				});
			done();
		});
	});
};

export default oauthTest;
