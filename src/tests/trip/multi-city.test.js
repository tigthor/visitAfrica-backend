/* eslint-disable no-useless-concat */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { multiCity, wrongMultiCity, wrongMultiCityDate, wrongMultiCityLocation, wrongMultiCityLocationSecond, token, wrongMultiCityArray, multiCityFalseId } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const multiCityTest = () => {
	describe('/POST multi city trip', () => {
		it('Should create multi city trip', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(multiCity)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.have.property('data');
				});
			done();
		});
		it('Should create multi city trip', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(multiCity)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(409);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should validate a user trying to create trip', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(multiCity)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(409);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should validate duplication', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(multiCity)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(409);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityDate)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityLocation)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(multiCityFalseId)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(400);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityLocation)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityLocationSecond)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityLocation)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityArray)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCity)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check for body input validation', (done) => {
			chai.request(app)
				.post('/api/trip/multi-city')
				.set('authorization', `bearer ${token}`)
				.send(wrongMultiCityLocation)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(402);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default multiCityTest;
