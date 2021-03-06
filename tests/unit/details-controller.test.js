const sinon = require('sinon');
const service = require('../../src/services');
const controllers = require('../../src/controllers');

describe('Controller details', () => {
  const req = {};
  const res = {};
  const next = sinon.stub();

  beforeAll(() => {
    req.params = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return next function when it has any error', async () => {
    sinon.stub(service, 'details').rejects(true);
    await controllers.details(req, res, next);
    sinon.assert.calledOnce(next);
  });

  it('should return a status of 200', async () => {
    sinon.stub(service, 'details').resolves(true);
    await controllers.details(req, res, next);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('should return a json with keys correctly', async () => {
    const details = {
      address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
      balance: '396820543',
      totalTx: 212853,
      balance_: {
        confirmed: '395465149',
        unconfirmed: '2865270',
      },
      total: {
        sent: '1375298590440',
        received: '1375695410983',
      },
    };
    sinon.stub(service, 'details').resolves(details);
    await controllers.details(req, res, next);
    expect(res.json.calledWith(sinon.match(details))).toBe(true);
  });
});
