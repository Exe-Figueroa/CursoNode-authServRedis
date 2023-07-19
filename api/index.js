//Acá vamos a contruir todo el servidor y recursos que vayamos necesitando
const express = require('express');
const app= express();

const port = 3000

app.use('/', (req, res)=>{
  res.send('hi, this is my server')
})

//Router

app.listen(port, ()=>{
  console.log(`Corriendo en el puerto ${port}`);
})