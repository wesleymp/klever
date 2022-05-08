const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');
const utxo = require('../memory-requests/utxo');

describe('Services send', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return a json with keys correctly', async () => {
    const expectSend = {
      utxos: [
        {
          txid: 'd36d9bf2cd44dfb654cb9121add698334104feb9ee61c07e048369aa88b8462d',
          amount: '1526092',
        },
        {
          txid: 'e25fd45748afa9d19435b3716c37140b60be9a9075947e44c02a90214fb26ffd',
          amount: '78297',
        },
        {
          txid: '2199384a9ac83750ed2c5bf3bc3d22a64ca9fced53fafbabf73c0595ccab830c',
          amount: '2715645',
        },
        {
          txid: '5606c162193a8d1cb64f9e452e1ff09cc7a16240fb0357410e07488ce7c2ecf4',
          amount: '2904394',
        },
      ],
    };
    sinon.stub(models, 'utxo').resolves(utxo);
    const sendData = await services.send();
    expect(sendData).toMatchObject(expectSend);
  });
});
