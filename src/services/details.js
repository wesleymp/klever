const models = require('../models');
const detailsMap = require('./helpers/detailsMap');

const details = async (address) => {
  const dataDetails = await models.details(address);
  const dataBalance = await models.balance(address);
  const newDetails = detailsMap({ dataDetails, dataBalance });
  return newDetails;
};

module.exports = details;
