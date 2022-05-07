const axios = require('./axios');

const details = async (address) => {
  const { data } = await axios.get(`/address/${address}`);
  return data;
};

module.exports = details;
