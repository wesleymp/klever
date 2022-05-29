const sinon = require('sinon');
const service = require('../../src/services');
const controllers = require('../../src/controllers');

describe('Controller send', () => {
  const req = {
    body: {
      address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
    },
  };
  const res = {};
  const next = sinon.stub();

  beforeAll(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return next function when it has any error', async () => {
    sinon.stub(service, 'send').rejects(true);
    await controllers.send(req, res, next);
    sinon.assert.calledOnce(next);
  });

  it('should return a status of 200', async () => {
    sinon.stub(service, 'send').resolves(true);
    await controllers.send(req, res, next);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('should return a json with keys correctly', async () => {
    const send = {
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
    sinon.stub(service, 'send').resolves(send);
    await controllers.send(req, res, next);
    expect(res.json.calledWith(sinon.match(send))).toBe(true);
  });
});
