const sinon = require('sinon');
const controllers = require('../../src/controllers');

describe('Controller health', () => {
  const req = {};
  const res = {};

  beforeAll(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return a status of 200 if endpoint health is ok', async () => {
    await controllers.health(req, res);
    expect(res.status.calledWith(200)).toBe(true);
  });
});
