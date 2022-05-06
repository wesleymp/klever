const error = (err, _req, res, _next) => {
  if (err.response.status < 500) {
    return res.status(err.response.status).json({ message: err.response.data.error });
  }
  return res.status(500).json({ message: 'Internal error' });
};

module.exports = error;
