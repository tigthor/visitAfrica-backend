import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { superAdminToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const notificationTest = () => {
	describe('/GET Manager should get notifications for edited request', () => {
		it('Should edit a  trip', (done) => {
			chai
				.request(app)
				.get('/api/notification')
				.set('authorization', `bearer ${superAdminToken}`)
				.end((err, res) => {
					res.should.have.property('status', 403);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should retrieve notification successfully ', (done) => {
			chai
				.request(app)
				.get('/api/notification')
				.set('Authorization', `bearer ${superAdminToken}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(422);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default notificationTest;
