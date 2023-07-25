const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const {port} = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network.js')
const errors = require('../network/errors.js');

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

// ROUER
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/auth', auth);
//middlewares
app.use(errors);

app.listen(port, () => {
    console.log(`Listening port: ${port}`);
});
