const sinon = require('sinon');
const service = require('../../src/services');
const controllers = require('../../src/controllers');

describe('Controller transaction', () => {
  const req = {};
  const res = {};
  const next = sinon.stub();

  beforeAll(() => {
    req.params = '3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab';
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return next function when it has any error', async () => {
    sinon.stub(service, 'transaction').rejects(true);
    await controllers.transaction(req, res, next);
    sinon.assert.calledOnce(next);
  });

  it('should return a status of 200', async () => {
    sinon.stub(service, 'transaction').resolves(true);
    await controllers.transaction(req, res, next);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('should return a json with keys correctly', async () => {
    const transaction = {
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
    sinon.stub(service, 'transaction').resolves(transaction);
    await controllers.transaction(req, res, next);
    expect(res.json.calledWith(sinon.match(transaction))).toBe(true);
  });
});
