const store = require('../../../store/mysql.js');
const ctrl = require('./controller');

module.exports = ctrl(store);
