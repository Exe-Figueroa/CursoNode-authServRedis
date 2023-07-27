// const store = require('../../../store/mysql.js');
const store = require('../../../store/remote-mysql.js');
const ctrl = require('./controller');

module.exports = ctrl(store);