const axios = require('../models/axios');

const parserBalance = (data) => {
  const balance = {
    confirmed: 0,
    unconfirmed: 0,
  };
  data.forEach((utxo) => {
    if (utxo.confirmations < 2) {
      balance.unconfirmed += parseInt(utxo.value, 10);
    } else {
      balance.confirmed += parseInt(utxo.value, 10);
    }
  });
  balance.confirmed = balance.confirmed.toString();
  balance.unconfirmed = balance.unconfirmed.toString();
  return balance;
};

const balance = async (address) => {
  const { data } = await axios.get(`/utxo/${address}`);
  const newBalance = parserBalance(data);
  return newBalance;
};

module.exports = balance;
