const axios = require('./axios');

const balance = async (address) => {
  const { data } = await axios.get(`/utxo/${address}`);
  return data;
};

module.exports = balance;
