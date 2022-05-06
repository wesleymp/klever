const services = require('../services');

const balance = async (req, res, next) => {
  const { address } = req.params;
  try {
    const balanceData = await services.balance(address);
    return res.status(200).json(balanceData);
  } catch (error) {
    return next(error);
  }
};

module.exports = balance;
