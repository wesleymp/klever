const sinon = require('sinon');
const middlewares = require('../../src/middlewares');

describe('Middleware validateAddress', () => {
  const req = {};
  const res = {};
  const next = sinon.stub();

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  it('should return a status of 404 when the address is not informed', () => {
    req.body = {};
    middlewares.validateAddress(req, res, next);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('should return a message { message: "Please enter an address" } when the address is not informed', () => {
    req.body = {};
    middlewares.validateAddress(req, res, next);
    expect(res.json.calledWith({ message: 'Please enter an address' })).toBe(true);
  });

  it('should return a status of 404 when the address is empty', () => {
    req.body.address = '';
    middlewares.validateAddress(req, res, next);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('should return a message { message: "Please enter an address" } when the address is empty', () => {
    req.body.address = '';
    middlewares.validateAddress(req, res, next);
    expect(res.json.calledWith({ message: 'Please enter an address' })).toBe(true);
  });

  it('should return the next function if the address entered is correct', () => {
    req.body.address = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';
    middlewares.validateAddress(req, res, next);
    sinon.assert.calledOnce(next);
  });
});
