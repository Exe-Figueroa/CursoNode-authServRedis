const auth = require('../../../auth/index.js');

module.exports = function checkAuth(action){
  function middleware(req, res, next) {
    switch (action) {
      case 'update':
        const owner = req.body.id;
        auth.check.own(req, owner);//Se comprueba que el user que haya generado el token sea el mismo user que queremos comprobar. (No sirve de nada checkear un usuario distinto)
        next();
        break;
      case 'follow':
        auth.check.logged(req);
        next();
        break;
      default:
        next();
        break;
    }
  }

  return middleware;
}; 