import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { token, fakeToken, expiredToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const getUserTest = () => {
	describe('/GET getting user profile by attribute', () => {
		it('should check if a user is available on view profile', (done) => {
			chai
				.request(app)
				.get('/api/users/profile')
				.set('Authorization', `Bearer ${token}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should check if the user has invalid token', (done) => {
			chai
				.request(app)
				.get('/api/users/profile')
				.set('Authorization', `Bearer ${fakeToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(401);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should check if the user set expired token', (done) => {
			chai
				.request(app)
				.get('/api/users/profile')
				.set('authorization', `Bearer ${expiredToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(401);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default getUserTest;
