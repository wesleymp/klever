const transaction = (data) => {
  const details = {
    addresses: data.vout.map((address) => ({
      address: address.addresses[0],
      value: address.value,
    })),
    bock: data.blockHeight,
    txID: data.txid,
  };
  return details;
};

module.exports = transaction;
