const express = require('express');
const route = express.Router();

const siteController = require('../app/controller/SiteController');


route.use('/', siteController.index);

module.exports = route;