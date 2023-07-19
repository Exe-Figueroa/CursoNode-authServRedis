const {port} = require('../config.js');
//Acá vamos a contruir todo el servidor y recursos que vayamos necesitando
const express = require('express');

const user = require('./components/user/network.js')
const { json } = require('body-parser');

const app= express();

app.use(json());
app.use('/api/user', user)


app.listen(port, ()=>{
  console.log(`Corriendo en el puerto ${port}`);
})