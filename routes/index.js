var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});
router.get('/other', function(req, res) {
  res.render('other', { title: 'Other' });
});
router.get('/button', function(req, res) {
  res.render('button', { title: 'button' });
});
router.get('/dialog', function(req, res) {
  res.render('dialog', { title: 'dialog' });
});
router.get('/select', function(req, res) {
  res.render('select', { title: 'select' });
});
router.get('/datepicker', function(req, res) {
  res.render('datepicker', { title: 'datepicker' });
});
router.get('/table', function(req, res) {
  res.render('table', { title: 'table' });
});
router.get('/tablemock', function(req, res) {
  res.render('tablemock', { title: 'tablemock' });
});


module.exports = router;
