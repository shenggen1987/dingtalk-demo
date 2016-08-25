module.exports = function(app) {
	app.use('/api/movies', require('./routes/movies.js'));
};
