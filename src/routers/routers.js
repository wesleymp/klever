const { Router } = require('express');
const controllers = require('../controllers');

const routers = Router();

routers.get('/details/:address', controllers.details);

module.exports = routers;
