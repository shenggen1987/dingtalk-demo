var express = require('express');
var router = express.Router();


var config = require('../backend/config');
var async = require('async');

var https = require("https");
var querystring = require('querystring');
var url = require('url');
var crypto = require('crypto');


const OAPI_HOST = 'https://oapi.dingtalk.com';
const corpId = config.dingtalk.jsapi.corpId;
const secret = config.dingtalk.jsapi.secret;
/* GET home page. dingtalk router */
router.get('/', function(req, res) {
	var nonceStr = 'abcdefg';
  var timeStamp = new Date().getTime();
  var signedUrl = decodeURIComponent(this.href);

  // async.waterfall([
		// 	function(callback){
		// 		invoke('/gettoken', {corpid: corpId, corpsecret: secret}, callback)
		// 	},
		// 	function(result, callback){
		// 	  invoke('/get_jsapi_ticket', {type: 'jsapi', access_token: result['access_token']}, callback)
		// 	}
		// ], function (err, result) {
		//    console.log(result);
		//    var ticket = result['ticket']
		//    var signature = sign({
  //           nonceStr: nonceStr,
  //           timeStamp: timeStamp,
  //           url: signedUrl,
  //           ticket: ticket
  //       });
  //       var result = {
  //           signature: signature,
  //           nonceStr: nonceStr,
  //           timeStamp: timeStamp,
  //           corpId: corpId
  //       };
  //       res.render('index', { title: 'Main', config: JSON.stringify(result)});
		// });

  	res.render('index', 
  		{ 
  			title: 'Main', 
  			config: '{"signature":"98fbc01b8e962c708ab6f5477bb9b7dde2c2a674","nonceStr":"abcdefg","timeStamp":1474089196317,"corpId":"dingbb4b33cbdeb6e17035c2f4657eb6378f"}'
			}
		);
});
function invoke(path, params, cb) {
    https.get(OAPI_HOST + path + '?' + querystring.stringify(params), function(res) {
            if (res.statusCode === 200) {
                var body = '';
                res.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    var result = JSON.parse(body);
                    if (result && 0 === result.errcode) {
                        cb(null, result);
                    }
                    else {
                        cb(result);
                    }
                });
            }
            else {
                cb(new Error(response.statusCode));
            }
        }).on('error', function(e) {
            cb(e);
        });
}
function sign(params) {
    var origUrl = params.url;
    var origUrlObj =  url.parse(origUrl);
    delete origUrlObj['hash'];
    var newUrl = url.format(origUrlObj);
    var plain = 'jsapi_ticket=' + params.ticket +
        '&noncestr=' + params.nonceStr +
        '&timestamp=' + params.timeStamp +
        '&url=' + newUrl;

    console.log(plain);
    var sha1 = crypto.createHash('sha1');
    sha1.update(plain, 'utf8');
    var signature = sha1.digest('hex');
    console.log('signature: ' + signature);
    return signature;
}
//weixin router
// router.get('/', function(req, res) {
//   res.render('weixin', { title: 'Main' });
// });

module.exports = router;
