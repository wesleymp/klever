const sinon = require('sinon');
const service = require('../../src/services');
const controllers = require('../../src/controllers');

jest.mock('../../src/services');
service.balance.mockImplementation(() => Promise.resolve({
  confirmed: '339376312',
  unconfirmed: '68509740',
}));

describe('Controller balance', () => {
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
    sinon.stub(service, 'balance').rejects(true);
    await controllers.balance(req, res, next);
    sinon.assert.calledOnce(next);
  });

  it('should return a status of 200', async () => {
    sinon.stub(service, 'balance').resolves(true);
    await controllers.balance(req, res, next);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('should return a json with keys confirmed and unconfirmed', async () => {
    const balance = {
      confirmed: '339376312',
      unconfirmed: '68509740',
    };
    sinon.stub(service, 'balance').resolves(balance);
    await controllers.balance(req, res, next);
    expect(res.json.calledWith(sinon.match(balance))).toBe(true);
  });
});
