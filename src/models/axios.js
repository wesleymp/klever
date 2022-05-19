const { create } = require('axios');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const axios = create({
  baseURL: 'https://bitcoin.blockbook.chains.klever.io/api/v2',
  httpsAgent: agent,
});

axios.defaults.timeout = 2000;

module.exports = axios;
