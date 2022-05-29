const services = require('../services');

const send = async (req, res, next) => {
  const { address } = req.body;
  try {
    const sendData = await services.send(address);
    return res.status(200).json(sendData);
  } catch (error) {
    return next(error);
  }
};

module.exports = send;
