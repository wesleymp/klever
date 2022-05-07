const sinon = require('sinon');
const error = require('../../src/middlewares/error');

describe('Middleware error', () => {
  const err = {};
  const req = {};
  const res = {};
  const next = sinon.stub();

  beforeEach(() => {
    err.response = {};
    err.response = { data: {} };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  it('should return a status other than 500', () => {
    err.response.status = 400;
    err.response.data.error = 'Bad Request';
    error(err, req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('should return a message { message: "Bad Request" }', () => {
    err.response.status = 400;
    err.response.data.error = 'Bad Request';
    error(err, req, res, next);
    expect(res.json.calledWith({ message: 'Bad Request' })).toBe(true);
  });

  it('should return a status 500', () => {
    err.response.status = 500;
    err.response.data.error = 'Internal error';
    error(err, req, res, next);
    expect(res.status.calledWith(500)).toBe(true);
  });

  it('should return a message { message: "Internal error" }', () => {
    err.response.status = 500;
    err.response.data.error = 'Internal error';
    error(err, req, res, next);
    expect(res.json.calledWith({ message: 'Internal error' })).toBe(true);
  });
});
