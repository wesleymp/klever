const { create } = require('axios');

const axios = create({
  baseURL: 'https://bitcoin.blockbook.chains.klever.io/api/v2',
});

axios.defaults.timeout = 2000;

module.exports = axios;
