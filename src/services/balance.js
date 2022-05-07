const models = require('../models');
const balanceMap = require('./helpers/balanceMap');

const balance = async (address) => {
  const balanceData = await models.balance(address);
  const newBalance = balanceMap(balanceData);
  return newBalance;
};

module.exports = balance;
