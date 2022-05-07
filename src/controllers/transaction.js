const services = require('../services');

const transaction = async (req, res, next) => {
  const { tx } = req.params;
  try {
    const transactionData = await services.transaction(tx);
    return res.status(200).json(transactionData);
  } catch (error) {
    return next(error);
  }
};

module.exports = transaction;
