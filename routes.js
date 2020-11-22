const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    var cities = require('./repository/city/city.routes')(router);
    return router;
}

module.exports = eRoutes;