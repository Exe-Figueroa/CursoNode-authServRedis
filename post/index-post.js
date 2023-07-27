const express = require('express');
const bodyParser = require('body-parser');

const {port} = require('../config.js');
const post = require('./components/post/network.js');
const errors = require('../network/errors.js');

const app = express();

app.use(bodyParser.json());

app.use('/api/post', post);

app.use(errors);

app.listen(3002, () => {
  console.log(`Listening port: 3002`);
});