import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import {
	multiCityToken
} from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const notificationOnEditTrip = () => {
	describe('/GET Notification on edited trip', () => {
		it('Should create multi city trip', (done) => {
			chai
				.request(app)
				.get('/api/notification')
				.set('authorization', `bearer ${multiCityToken}`)
				.end((err, res) => {
					res.should.have.property('status', 200);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default notificationOnEditTrip;
