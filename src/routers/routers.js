const { Router } = require('express');
const controllers = require('../controllers');

const routers = Router();

routers.get('/details/:address', controllers.details);
routers.get('/balance/:address', controllers.balance);
routers.get('/tx/:tx', controllers.transaction);

module.exports = routers;
