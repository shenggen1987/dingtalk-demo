var express = require('express');
var router = express.Router();


var config = require('../backend/config');
var Index = require('./controller/index');
/* GET home page. dingtalk router */
if(config.project === 'dingtalk'){
	router.get('/', Index.Dingtalk);
}else{
	//weixin router
	router.get('/', Index.Weixin);
}

module.exports = router;
