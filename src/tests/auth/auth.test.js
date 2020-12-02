import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { user } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/POST signup and emailsending on success', () => {
	it('Should register a user and send email on success', (done) => {
		chai.request(app)
			.post('/api/auth/signup')
			.send(user)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(201);
				res.body.should.have.property('message');
				done();
			});
	});
});
