const request = require('supertest');
const sinon = require('sinon');
const models = require('../../src/models');
const transaction = require('../memory-requests/transaction');

const app = require('../../src/main/app');

describe('Rota [GET] /tx/:tx', () => {
  const transactionId = '3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab';
  const transactionIdError = '3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830a';
  const expectError = {
    message: 'Transaction \'3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830a\' not found (encoding/hex: odd length hex string)',
  };

  afterEach(() => {
    sinon.restore();
  });

  it('should return a status 200 when accessing rote /tx/:tx', (done) => {
    sinon.stub(models, 'transaction').resolves(transaction);
    request(app)
      .get(`/tx/${transactionId}`)
      .expect(200)
      .end(done);
  });

  it('should return a json correclty when accessing rote /tx/:tx', (done) => {
    const expectTransaction = {
      addresses: [
        {
          address: '36iYTpBFVZPbcyUs8pj3BtutZXzN6HPNA6',
          value: '623579',
        },
        {
          address: 'bc1qe29ydjtwyjdmffxg4qwtd5wfwzdxvnap989glq',
          value: '3283266',
        },
      ],
      bock: 675674,
      txID: '3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab',
    };
    sinon.stub(models, 'transaction').resolves(transaction);
    request(app)
      .get(`/tx/${transactionId}`)
      .then((res) => {
        expect(res.body).toMatchObject(expectTransaction);
        return done();
      });
  });

  it('should return a status 400 when accessing with incorrectly address at rote /tx/:tx', (done) => {
    sinon.stub(models, 'transaction').rejects({ response: { status: 400 } });
    request(app)
      .get(`/tx/${transactionIdError}`)
      .expect(400)
      .end(done);
  });

  it('should return error message when accessing with incorrectly address at rote /tx/:tx', (done) => {
    sinon.stub(models, 'transaction').rejects({ response: { status: 400, data: { error: expectError.message } } });
    request(app)
      .get(`/tx/${transactionIdError}`)
      .expect((error) => {
        expect(JSON.parse(error.text)).toMatchObject(expectError);
      })
      .end(done);
  });
});
