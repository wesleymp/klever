const detailsMap = ({ dataDetails, dataBalance }) => {
  const details = {
    address: dataDetails.address,
    balance: dataDetails.balance,
    totalTx: dataDetails.txs,
    balance_: dataBalance,
    total: {
      sent: dataDetails.totalSent,
      received: dataDetails.totalReceived,
    },
  };
  return details;
};

module.exports = detailsMap;
