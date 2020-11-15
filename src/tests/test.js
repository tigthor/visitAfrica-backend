import chai from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);
chai.use(sinonChai);
chai.should();

describe('Application testing', () => {
  it('simple message to be displayed', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.status).to.be.equal('success');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});
