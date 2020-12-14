/* eslint-disable no-useless-concat */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import {
	userData,
	superAdminToken,
	requesterToken1,
} from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const manageUserTest = () => {
	describe('/POST superAdmin should assign Users to their lineManagers', () => {
		it('you should not perform this action', (done) => {
			chai
				.request(app)
				.post('/api/users/user/4')
				.send({
					managerId: 4,
				})
				.set('authorization', `bearer ${requesterToken1}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.equal(403);
					res.body.message.should.equal('You can not perform this Action');
				});
			done();
		});
		it('should not accept the body that contain the wrong entities ', (done) => {
			chai
				.request(app)
				.post('/api/users/user/1')
				.set('Authorization', `bearer ${superAdminToken}`)
				.send(userData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(422);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should not assign user who is not a lineManger', (done) => {
			chai
				.request(app)
				.post('/api/users/user/1')
				.set('Authorization', `bearer ${superAdminToken}`)
				.send({
					managerId: 1,
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should assign a user a manager', (done) => {
			chai
				.request(app)
				.post('/api/users/user/1')
				.set('Authorization', `bearer ${superAdminToken}`)
				.send({
					managerId: 4,
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should assign a user a manager', (done) => {
			chai
				.request(app)
				.post('/api/users/user/1000')
				.set('Authorization', `bearer ${superAdminToken}`)
				.send({
					managerId: 4,
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(404);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should not allow  a non number userId', (done) => {
			chai
				.request(app)
				.post('/api/users/user/k')
				.set('Authorization', `bearer ${superAdminToken}`)
				.send({
					managerId: 4,
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});

		it('lineManager should not have a lineManager ', (done) => {
			chai
				.request(app)
				.post('/api/users/user/4')
				.set('Authorization', `bearer ${superAdminToken}`)
				.send({
					managerId: 4,
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});
		it('User should be assigned ', (done) => {
			chai
				.request(app)
				.post('/api/users/user/8')
				.set('authorization', `bearer ${superAdminToken}`)
				.send({
					managerId: 6,
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default manageUserTest;
