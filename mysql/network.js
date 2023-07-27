const express = require('express');

const response = require('../network/response.js');
const store = require('../store/mysql.js');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/:table', update);


async function list(req, res, next) {
  const data = await store.list(req.params.table);
  response.success(req, res, data, 200);
}
async function get(req, res, next) {
  const data = await store.get(req.params.table, req.params.id);
  response.success(req, res, data, 200);
}
async function insert(req, res, next) {
  const data = await store.insert(req.params.table, req.body);
  response.success(req, res, data, 200);
}
async function update(req, res, next) {
  const data = await store.update(req.params.table, req.body);
  response.success(req, res, data, 200);
  
}

module.exports = router;