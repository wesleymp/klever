/* eslint-disable no-dupe-keys */
const axios = require('../models/axios');

const details = async (address) => {
  const { data: dataDetails } = await axios.get(`/address/${address}`);
  const newDetails = {
    address: dataDetails.address,
    balance: dataDetails.balance,
    totalTx: dataDetails.txs,
    balance_: {
      confirmed: '',
      unconfirmed: '',
    },
    total: {
      sent: dataDetails.totalSent,
      received: dataDetails.totalReceived,
    },

  };
  return newDetails;
};

module.exports = details;
