const CityRepository = require('./city.respository');
const dbContext = require('../../Database/dbContext');

module.exports = function (router) {
const cityRepository = CityRepository(dbContext);
        router.route('/cities')
        .get(cityRepository.getCities);
}

