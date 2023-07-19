//Base de datos falsa creada con el fin de probar que el código funka

const db = {
  'user':[
    {
      id: 1,
      name: 'cufa'
    },
    {
      id: 2,
      name: 'fran'
    },
    {
      id: 3,
      name: 'mar'
    },
    {
      id: 4,
      name: 'lau'
    },
    {
      id: 5,
      name: 'loren'
    },
    {
      id: 6,
      name: 'leo'
    },
  ]
};
async function list(table ) {
  return db[table];
}
async function get(table, id) {
  let collection = await list(table);
  return collection.filter(item=> item.id == id)[0] || null;
}
async function upsert(table, data ) {
  db[collection].push(data)
}
async function remove(table, id) {
  return true;
}

module.exports = {list, get, upsert, remove};
