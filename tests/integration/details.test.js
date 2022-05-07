const request = require('supertest');
const sinon = require('sinon');
const models = require('../../src/models');
const details = require('../memory-requests/details');

const app = require('../../src/main/app');

describe('Rota [GET] /details/:address', () => {
  const address = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';
  const addressError = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0';
  const expectError = {
    message: 'Invalid address \'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0\', decoded address is of unknown format',
  };
  const dataBalance = {
    confirmed: '5698336',
    unconfirmed: '1526092',
  };

  afterEach(() => {
    sinon.restore();
  });

  it('should return a status 200 when accessing rote /details/:address', (done) => {
    sinon.stub(models, 'details').resolves(details);
    sinon.stub(models, 'balance').resolves(dataBalance);
    request(app)
      .get(`/details/${address}`)
      .expect(200)
      .end(done);
  });

  it('should return a json correclty when accessing rote /details/:address', (done) => {
    const expectDetails = {
      address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
      balance: '355998033',
      totalTx: 213021,
      balance_: {
        confirmed: '5698336',
        unconfirmed: '1526092',
      },
      total: {
        sent: '1376358482103',
        received: '1376714480136',
      },
    };
    sinon.stub(models, 'details').resolves(details);
    sinon.stub(models, 'balance').resolves(dataBalance);
    request(app)
      .get(`/details/${address}`)
      .then((res) => {
        expect(res.body).toMatchObject(expectDetails);
        return done();
      });
  });

  it('should return a status 400 when accessing with incorrectly address at rote /details/:address', (done) => {
    sinon.stub(models, 'details').rejects({ response: { status: 400 } });
    sinon.stub(models, 'balance').rejects(dataBalance);
    request(app)
      .get(`/details/${addressError}`)
      .expect(400)
      .end(done);
  });

  it('should return error message when accessing with incorrectly address at rote /details/:address', (done) => {
    sinon.stub(models, 'details').rejects({ response: { status: 400, data: { error: expectError.message } } });
    sinon.stub(models, 'balance').rejects(dataBalance);
    request(app)
      .get(`/details/${addressError}`)
      .expect((error) => {
        expect(JSON.parse(error.text)).toMatchObject(expectError);
      })
      .end(done);
  });
});
