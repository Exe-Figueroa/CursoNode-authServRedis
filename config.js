require('dotenv').config();

const config = {
  port: process.env.PORT,
  secret: process.env.JWT_SECRET || 'NotaSecret!',
  mysql:{
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
    host: process.env.MYSQL_SRV_HOST || 'localhost',
  }
}

module.exports = config;