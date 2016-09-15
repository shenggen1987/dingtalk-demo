var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Main' });
// });
router.get('/', function(req, res) {
  res.render('weixin', { title: 'Main' });
});
module.exports = router;
