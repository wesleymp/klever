const models = require('../models');
const transactionMap = require('./helpers/transactionMap');

const transaction = async (tx) => {
  const transactionData = await models.transaction(tx);
  const newTransaction = transactionMap(transactionData);
  return newTransaction;
};

module.exports = transaction;
