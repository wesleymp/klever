const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');
const details = require('../memory-requests/details');

describe('Services details', () => {
  const address = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';

  afterEach(() => {
    sinon.restore();
  });

  it('should return a json with keys correctly', async () => {
    const dataBalance = {
      confirmed: '5698336',
      unconfirmed: '1526092',
    };
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
    const detailsData = await services.details(address);
    expect(detailsData).toMatchObject(expectDetails);
  });
});
