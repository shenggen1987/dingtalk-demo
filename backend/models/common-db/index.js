var mongoose = require('mongoose');
var debug = require('debug');
var fs = require('fs');
var path = require('path');
//标记，防止重复加载
var isReady = false;

//schema对象缓存
var _schema = {};
mongoose.Promise = global.Promise;
//需要传入全局config文件
module.exports = function (config) {
	if(!config) {
		debug('config must be required');
		process.exit(-1);
	}
	if(isReady === true) return _schema;
	isReady = true;
	mongoose.connect(config.db.url);
	var db = mongoose.connection;
	db.on('error', function(err) {
		if (err) {
			console.error('db connet error,now exit thread');
			process.exit(-1);
		}
		debug('*********** db connect success********');
	});
	db.once('open', function() {
		debug('*********** db connect success********');
	});


	var files = [];

	function getAllFile(fpath) {
		if (fs.existsSync(fpath)) {
			var stat = fs.statSync(fpath);
			if (stat.isFile()) {
				if (fpath.split('.')[1] === 'js' && fpath.indexOf('index.js') < 0) {
					require_model(fpath);
					files.push(fpath);
				}
			} else if (stat.isDirectory()) {
				var sub_path = fs.readdirSync(fpath);
				sub_path.forEach(function(_path) {
					getAllFile(path.join(fpath, _path));
				});
			}
		}
	}

	function require_model(mpath) {
		var model_name = mpath.substring(mpath.lastIndexOf('/') + 1, mpath.length - 3);
		model_name = flat_name(model_name);
		debug('loading model ', model_name);
		var schema = require(mpath);
		// console.log(schema);

		var model_schema  = mongoose.model(model_name, schema);
		_schema[model_name] = model_schema;
		// _schema[model_name].method = schema.method;
		// debug(schema.test(function () {
		//
		// }))
		// debug(model_schema.authority);
	}

	//过滤掉下划线，首字母变成大写 user_follow -> UserFollow
	//需要注意的是这是个简略版 的flat，有一些情况可能没处理的，比如以_开头的字符串不能很好的处理
	//所以请给model文件命名的时候不要用下划线符号开头,名称中除了下划线不要加入其他的符号
	function flat_name(name) {
		return name.split('').reduce(function(pre, curr, index, arr) {

			if (index === 0 || arr[index - 1] === '_')
				pre.push(curr.toUpperCase());
			else if (curr !== '_') {
				pre.push(curr);
			}
			return pre;
		}, []).join('');
	}
	getAllFile(path.resolve(__dirname,'db'));
	// config.perm_node.datas = [{name:'name',code:'v'},{}];

	return _schema;
};
