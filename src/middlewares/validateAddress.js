const validadeAddress = (req, res, next) => {
  const { address } = req.body;
  if (!address || address === '') {
    return res.status(404).json({ message: 'Please enter an address' });
  }
  return next();
};

module.exports = validadeAddress;
