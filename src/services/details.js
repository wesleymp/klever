/* eslint-disable no-dupe-keys */
const axios = require('../models/axios');
require('dotenv').config();

const details = async (address) => {
  const { data: dataDetails } = await axios.get(`/address/${address}`);
  const { data: dataBalance } = await axios.get(`${process.env.BASE_URL}/balance/${address}`);
  const newDetails = {
    address: dataDetails.address,
    balance: dataDetails.balance,
    totalTx: dataDetails.txs,
    balance_: dataBalance,
    total: {
      sent: dataDetails.totalSent,
      received: dataDetails.totalReceived,
    },

  };
  return newDetails;
};

module.exports = details;
