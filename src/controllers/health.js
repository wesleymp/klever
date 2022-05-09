const health = async (_req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'OK',
    date: new Date(),
  };
  return res.status(200).json(data);
};

module.exports = health;
