const response =require('./response.js');

function errors(err, req, res, next) {
  console.error('--------[ERROR]:', err);

  const message = err.message || 'Internal Error';
  const status = err.statusCode || 500;

  response.error(req, res, message, status); 
}

module.exports = errors;
