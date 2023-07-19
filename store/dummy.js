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

async function list(tabla) {
  return db[tabla];
}

async function get(tabla, id) {
  let col = await list(tabla);
  return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
  db[tabla].push(data);
}

async function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};