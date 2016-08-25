var Models = require('../models');
exports.List = function(req, res, next) {
	Models.Movies.find({
  }).exec(function (err, data) {
  		console.dir(err, data);
  		return res.send(data);
  });
	// return res.send({
	// 	id: 1,
	// 	name: '111'
	// });
}