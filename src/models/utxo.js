const axios = require('./axios');

const utxo = async (address) => {
  const { data } = await axios.get(`/utxo/${address}`);
  return data;
};

module.exports = utxo;
