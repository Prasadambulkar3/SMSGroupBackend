const DepartmentRepository = require('./city.respository');
const dbContext = require('../../Database/dbContext');

module.exports = function (router) {
const departmentRepository = DepartmentRepository(dbContext);
    router.route('/cities')
        .get(departmentRepository.getCities);
}
