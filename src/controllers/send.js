const services = require('../services');

const send = async (_req, res, next) => {
  try {
    const sendData = await services.send();
    return res.status(200).json(sendData);
  } catch (error) {
    return next(error);
  }
};

module.exports = send;
