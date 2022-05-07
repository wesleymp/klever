/* eslint-disable no-dupe-keys */
const axios = require('../models/axios');
require('dotenv').config();
const detailsMap = require('./helpers/detailsMap');

const details = async (address) => {
  const { data: dataDetails } = await axios.get(`/address/${address}`);
  const { data: dataBalance } = await axios.get(`${process.env.BASE_URL}/balance/${address}`);
  const newDetails = detailsMap({ dataDetails, dataBalance });
  return newDetails;
};

module.exports = details;
