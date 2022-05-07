const axios = require('./axios');

const transaction = async (tx) => {
  const { data } = await axios.get(`/tx/${tx}`);
  return data;
};

module.exports = transaction;
