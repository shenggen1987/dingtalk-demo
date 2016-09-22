var express = require('express');
var router = express.Router();


var config = require('../backend/config');
var Index = require('./controller/index');
/* GET home page. dingtalk router */
config.project = config.project || 'dingtalk';
if(config.project === 'dingtalk'){
	router.get('/', Index.Dingtalk);
	router.post('/api/login', Index.Login);
}else{
	//weixin router
	router.get('/', Index.Weixin);
}

module.exports = router;
