var express = require('express');
var router = express.Router();

var Movies = require('../controller/movies');
router.get('/list', Movies.List);
router.get('/getById', Movies.getById);

module.exports = router;