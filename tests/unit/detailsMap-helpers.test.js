const detailsMap = require('../../src/services/helpers/detailsMap');
const dataDetails = require('../memory-requests/details');

describe('Helper balanceMap', () => {
  it('should return a json with keys correctly', () => {
    const dataBalance = {
      confirmed: '5698336',
      unconfirmed: '1526092',
    };
    const detailsData = detailsMap({ dataDetails, dataBalance });
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
    expect(detailsData).toMatchObject(expectDetails);
  });
});
