const { create } = require('axios');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const axios = create({
  baseURL: 'https://blockbook-bitcoin.tronwallet.me/api/v2',
  httpsAgent: agent,
});

module.exports = axios;
