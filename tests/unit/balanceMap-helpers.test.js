const balanceMap = require('../../src/services/helpers/balanceMap');
const utxo = require('../memory-requests/utxo');

describe('Helper balanceMap', () => {
  it('should return a json with keys confirmed and unconfirmed', () => {
    const balanceData = balanceMap(utxo);
    const expectBalance = {
      confirmed: '5698336',
      unconfirmed: '1526092',
    };
    expect(balanceData).toMatchObject(expectBalance);
  });
});
