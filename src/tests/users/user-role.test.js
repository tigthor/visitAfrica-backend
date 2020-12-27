/* eslint-disable no-useless-concat */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import {
	userRoleData,
	userToUpdateRole,
	superAdmin,
	createUser,
	superAdminToken,
	token,
	validateUserRoleBody,
} from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);
const userRoleTest = () => {
	describe('change users roles', () => {
		before(async () => {
			createUser(userToUpdateRole);
			createUser(superAdmin);
		});
		it('Should update a user', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/1')
				.set('Authorization', `Barer ${superAdminToken}`)
				.send(userRoleData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should not accept a string id', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/hyacinthe')
				.set('Authorization', `Bearer ${superAdminToken}`)
				.send(userRoleData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('superAdmin role can not be changed', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/3')
				.set('Authorization', `Bearer ${superAdminToken}`)
				.send(userRoleData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});
		it('we can not find user', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/50')
				.set('Authorization', `Bearer ${superAdminToken}`)
				.send(userRoleData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(404);
					res.body.should.have.property('message');
				});
			done();
		});
		it('You can not perform this task', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/1')
				.set('Authorization', `bearer ${token}`)
				.send(userRoleData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
				});
			done();
		});
		it('You can not perform this task', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/1')
				.set('Authorization', `Bearer ${token}`)
				.send(userRoleData.body)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
				});
			done();
		});
		it('should check if the user input is incorrect', (done) => {
			chai
				.request(app)
				.patch('/api/users/role/1')
				.set('Authorization', `bearer ${token}`)
				.send(validateUserRoleBody)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(402);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};
export default userRoleTest;
