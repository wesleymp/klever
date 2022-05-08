const models = require('../models');
const sendMap = require('./helpers/sendMap');

const send = async () => {
  const address = 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';
  const dataSend = await models.utxo(address);
  const newSend = sendMap(dataSend);
  return newSend;
};

module.exports = send;
