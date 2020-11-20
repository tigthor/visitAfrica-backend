import chai from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import app from '../server';

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
        done();
      });
  });
});