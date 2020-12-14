/* eslint-disable no-useless-concat */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { trip, fakeTrip } from '../fixtures/trip.fixture';
import { superAdminToken, requesterToken, token, mockToken, requesterMockToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const updateTripTest = () => {
	describe(' update trip information', () => {
		it('Should update a trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/1')
				.set('authorization', `bearer ${requesterToken}`)
				.send(trip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should update a trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/1')
				.set('authorization', `bearer ${requesterToken}`)
				.send(trip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should get a new trip information', (done) => {
			chai.request(app)
				.get('/api/trip/1')
				.set('authorization', `bearer ${requesterToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should get a new trip information', (done) => {
			chai.request(app)
				.get('/api/trip/100')
				.set('authorization', `bearer ${requesterToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(404);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should trip validate a trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/1')
				.set('authorization', `bearer ${requesterToken}`)
				.send(fakeTrip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should a validate trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/2')
				.set('authorization', `bearer ${requesterToken}`)
				.send(trip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should a validate trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/2')
				.set('authorization', `bearer ${mockToken}`)
				.send(trip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should a validate trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/2')
				.set('authorization', `bearer ${requesterMockToken}`)
				.send(trip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should update a trip', (done) => {
			chai.request(app)
				.patch('/api/trip/edit/1')
				.set('authorization', `bearer ${superAdminToken}`)
				.send(trip)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(403);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default updateTripTest;
