const sendMap = (sendData) => {
  const sewSend = {
    utxos: sendData.map((send) => ({
      txid: send.txid,
      amount: send.value,
    })),
  };
  return sewSend;
};

module.exports = sendMap;
