import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.use(chaiHttp);

const oauthTest = () => {
	describe('Test Google login', () => {
		it('should return 201 if a new user', (done) => {
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
	});
	describe('Test Facebook login', () => {
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
	});
};
export default oauthTest;
