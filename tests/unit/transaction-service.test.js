const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');
const transaction = require('../memory-requests/transaction');

describe('Services transaction', () => {
  const address = '3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab';

  afterEach(() => {
    sinon.restore();
  });

  it('should return a json with keys correctly', async () => {
    const expecttransaction = {
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
    const transactionData = await services.transaction(address);
    expect(transactionData).toMatchObject(expecttransaction);
  });
});
