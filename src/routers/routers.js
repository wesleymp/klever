const { Router } = require('express');
const controllers = require('../controllers');

const routers = Router();

routers.get('/details/:address', controllers.details);
routers.get('/balance/:address', controllers.balance);
routers.get('/send', controllers.send);
routers.get('/tx/:tx', controllers.transaction);
routers.get('/health', controllers.health);

module.exports = routers;
