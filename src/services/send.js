const models = require('../models');
const sendMap = require('./helpers/sendMap');

const send = async (address) => {
  const dataSend = await models.utxo(address);
  const newSend = sendMap(dataSend);
  return newSend;
};

module.exports = send;
