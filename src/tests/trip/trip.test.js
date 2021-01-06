/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import {
	userToVerify,
	userToken,
	tokenToVerify,
	returnTrip,
	wrongReturnTrip,
	wrongReturnTripLocation,
} from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const tripTest = () => {
	describe('/post return trip', () => {
		it('Should create return trip', (done) => {
			chai
				.request(app)
				.post('/api/trip/return-trip')
				.set('authorization', `Bearer ${userToken}`)
				.send(returnTrip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.property('status', 201);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should not dublicate return trip', (done) => {
			chai
				.request(app)
				.post('/api/trip/return-trip')
				.send(returnTrip)
				.set('authorization', `bearer ${userToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(409);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should not dublicate return trip', (done) => {
			chai
				.request(app)
				.post('/api/trip/return-trip')
				.send(returnTrip)
				.set('Authorization', `Bearer ${userToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(409);
					res.body.should.have.property('message');
				});
			done();
		});
		it('departureFrom can not be the same as departureTo ', (done) => {
			chai
				.request(app)
				.post('/api/trip/return-trip')
				.send(wrongReturnTripLocation)
				.set('Authorization', `Bearer ${userToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should not allow empty fields', (done) => {
			chai
				.request(app)
				.post('/api/trip/return-trip')
				.send(wrongReturnTrip)
				.set('Authorization', `Bearer ${userToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(422);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default tripTest;
