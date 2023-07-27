const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const router = require('./network.js');

const app = express();

app.use(bodyParser.json());

// routing
app.use('/', router)

app.listen(config.mysqlService.port, ()=>{
  console.log(`[MySQL-service]: Corriendo en el puerto ${config.mysqlService.port}`);
});