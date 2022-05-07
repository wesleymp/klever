const axios = require('./axios');
require('dotenv').config();

const balance = async (address) => {
  const { data } = await axios.get(`${process.env.BASE_URL}/balance/${address}`);
  return data;
};

module.exports = balance;
