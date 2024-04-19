var express = require('express');
var router = express.Router();
const {
  alimentos
} = require('../db');

/* GET catering listing. */
router.get('/', function(req, res, next) {
  res.send({
    alimentos
  });
});

router.get('/alimentos', function(req, res, next) {
  res.send([
    ...alimentos
  ]);
});


module.exports = router;
