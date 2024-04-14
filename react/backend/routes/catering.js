var express = require('express');
var router = express.Router();
const {
  vinos,
  sanduches,
  cupcakes,
  bodas,
  categorias
} = require('../db');

/* GET catering listing. */
router.get('/', function(req, res, next) {
  res.send({
    vinos,
    sanduches,
    cupcakes,
    bodas,
    categorias
  });
});

router.get('/vinos', function(req, res, next) {
  res.send([
    ...vinos
  ]);
});

router.get('/sanduches', function(req, res, next) {
  res.send([
    ...sanduches
  ]);
});

router.get('/cupcakes', function(req, res, next) {
  res.send([
    ...cupcakes
  ]);
});

router.get('/bodas', function(req, res, next) {
  res.send([
    ...bodas
  ]);
});
router.get('/categorias', function(req, res, next) {
  res.send([
    ...categorias
  ]);
});

module.exports = router;
