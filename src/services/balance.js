const axios = require('../models/axios');
const balanceMap = require('./helpers/balanceMap');

const balance = async (address) => {
  const { data } = await axios.get(`/utxo/${address}`);
  const newBalance = balanceMap(data);
  return newBalance;
};

module.exports = balance;
