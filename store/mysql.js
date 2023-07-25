const mysql = require('mysql'); 
const config = require('../config.js');

const dbConf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

//Crear connection
let connection;

function handleConnection() {
  connection=mysql.createConnection(dbConf);
  connection.connect((err)=>{
    if (err) {
      console.error('[db Error]', err);
      setTimeout(handleConnection, 2000);
    }else{
      console.log('DB connected');
    }
  });
  
  connection.on('error', (err)=>{
    console.error('[db Error]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleConnection()
    }else {
      throw err;
    }
  })
}
handleConnection();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`,
      (err, data)=>{
        if (err) return reject(err)
        resolve(data);
      }
    )
  })
}

module.exports = {
  list,

}