const express = require('express');
const cors = require('cors');
const routers = require('../routers/routers');
const middlewares = require('../middlewares');

const app = express();
app.use(cors());
app.use(routers);
app.use(middlewares.error);

module.exports = app;
