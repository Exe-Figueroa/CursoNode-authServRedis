const TABLA = 'post';

module.exports = (inyectedSStore)=>{
  let store = inyectedSStore;
  if (!store) {
    store = require('../../../store/dummy.js')
  }

  function list() {
    return store.list(TABLA);
  }

  return {
    list
  }

}