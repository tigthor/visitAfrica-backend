import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { forgetPassword, createUser, userToForgetPassword, forgotPasswordToken, tokenToVerify, passwordMatch, passwordDonotMatch, validate } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const userVerificationTest = () => {
	describe('/POST forget password', () => {
		before(() => {
			createUser(forgetPassword);
		});
		it('Should help a user who forgot the password', (done) => {
			chai.request(app)
				.post('/api/auth/forgetpassword')
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(userToForgetPassword)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check if user not found', (done) => {
			chai.request(app)
				.post('/api/auth/forgetpassword')
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(forgetPassword)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(404);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should link the user to where to change the password', (done) => {
			chai.request(app)
				.get(`/api/auth/resetpassword?token=${tokenToVerify}`)
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(userToForgetPassword)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check if the password match', (done) => {
			chai.request(app)
				.patch(`/api/auth/resetpassword?token=${forgotPasswordToken}`)
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(passwordMatch)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check if the password does not match', (done) => {
			chai.request(app)
				.patch(`/api/auth/resetpassword?token=${forgotPasswordToken}`)
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(passwordDonotMatch)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should validate the user input', (done) => {
			chai.request(app)
				.patch(`/api/auth/resetpassword?token=${forgotPasswordToken}`)
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(validate)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should validate the user email', (done) => {
			chai.request(app)
				.post('/api/auth/forgetpassword')
				.set('Authorization', `Bearer ${forgotPasswordToken}`)
				.send(validate)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default userVerificationTest;
