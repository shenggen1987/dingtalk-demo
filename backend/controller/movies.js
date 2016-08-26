var Models = require('../models');
exports.List = function(req, res, next) {
	Models.Movies.find({
  }).exec(function (err, data) {
  		return res.send(data);
  });
	// return res.send({
	// 	id: 1,
	// 	name: '111'
	// });
}

exports.getById = function(req, res, next){
	Models.Movies.findOne({
		_id: req.query.id
  }).exec(function (err, data) {
  		return res.send(data);
  });
}