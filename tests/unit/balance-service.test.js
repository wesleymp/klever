const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');
const utxo = require('../memory-requests/utxo');

describe('Services balance', () => {
  const address = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';

  afterEach(() => {
    sinon.restore();
  });

  it('should return a json with keys confirmed and unconfirmed', async () => {
    const expectBalance = {
      confirmed: '5698336',
      unconfirmed: '1526092',
    };
    sinon.stub(models, 'balance').resolves(utxo);
    const balanceData = await services.balance(address);
    expect(balanceData).toMatchObject(expectBalance);
  });
});
