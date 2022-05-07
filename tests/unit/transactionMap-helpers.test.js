const transactionMap = require('../../src/services/helpers/transactionMap');
const dataTransaction = require('../memory-requests/transaction');

describe('Helper transactionMap', () => {
  it('should return a json with keys correctly', () => {
    const transactionData = transactionMap(dataTransaction);
    const expecTransaction = {
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
    expect(transactionData).toMatchObject(expecTransaction);
  });
});
