/* eslint-disable no-useless-concat */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { multiCityToken, requesterMockToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const getRequestTable = () => {
	describe(' should get requests ', () => {
		it('Should get the requests submitted', (done) => {
			chai
				.request(app)
				.get('/api/requests')
				.set('authorization', `bearer ${multiCityToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should get a new trip information', (done) => {
			chai
				.request(app)
				.get('/api/requests')
				.set('authorization', `bearer ${requesterMockToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(404);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should get a new trip information', (done) => {
			chai
				.request(app)
				.get('/api/requests')
				.set('authorization', `bearer ${requesterMockToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(404);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default getRequestTable;
