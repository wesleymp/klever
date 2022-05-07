const request = require('supertest');
const sinon = require('sinon');
const models = require('../../src/models');
const utxo = require('../memory-requests/utxo');

const app = require('../../src/main/app');

describe('Rota [GET] /balance/:address', () => {
  const address = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';
  const addressError = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0';
  const expectError = {
    message: 'Invalid address \'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0\', decoded address is of unknown format',
  };

  afterEach(() => {
    sinon.restore();
  });

  it('should return a status 200 when accessing rote /balance/:address', (done) => {
    sinon.stub(models, 'utxo').resolves(utxo);
    request(app)
      .get(`/balance/${address}`)
      .expect(200)
      .end(done);
  });

  it('should return a json correclty when accessing rote /balance/:address', (done) => {
    const expectBalance = {
      confirmed: '5698336',
      unconfirmed: '1526092',
    };
    sinon.stub(models, 'utxo').resolves(utxo);
    request(app)
      .get(`/balance/${address}`)
      .then((res) => {
        expect(res.body).toMatchObject(expectBalance);
        return done();
      });
  });

  it('should return a status 400 when accessing with incorrectly address at rote /balance/:address', (done) => {
    sinon.stub(models, 'utxo').rejects({ response: { status: 400 } });
    request(app)
      .get(`/balance/${addressError}`)
      .expect(400)
      .end(done);
  });

  it('should return error message when accessing with incorrectly address at rote /balance/:address', (done) => {
    sinon.stub(models, 'utxo').rejects({ response: { status: 400, data: { error: expectError.message } } });
    request(app)
      .get(`/balance/${addressError}`)
      .expect((error) => {
        expect(JSON.parse(error.text)).toMatchObject(expectError);
      })
      .end(done);
  });
});
