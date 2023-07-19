const express = require('express');
const bodyParser = require('body-parser');

const {port} = require('../config.js');
const user = require('./components/user/network');

const app = express();

app.use(bodyParser.json());


// ROUER
app.use('/api/user', user);

app.listen(port, () => {
    console.log(`Listening port: ${port}`);
});
