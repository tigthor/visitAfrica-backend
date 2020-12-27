import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.should();
chai.use(chaiHttp);

const notificationTest = () => {
	describe('/GET notification for approved request', () => {
		it('Should get notification for approved request', (done) => {
			chai
				.request(app)
				.get('/api/notification/approved')
				.end((err, res) => {
					res.should.have.property('status', 200);
					res.body.should.have.property('message');
				});
			done();
		});
		it('should retrieve notification successfully ', (done) => {
			chai
				.request(app)
				.get('/api/notification/approved')
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default notificationTest;
