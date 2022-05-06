const services = require('../services');

const details = async (req, res, next) => {
  const { address } = req.params;
  try {
    const detailsData = await services.details(address);
    return res.status(200).json(detailsData);
  } catch (error) {
    return next(error);
  }
};

module.exports = details;
