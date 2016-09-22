module.exports = {
    dev: {
        secret: 'lishenggen',
        "db": {
            "url": "mongodb://test:test@127.0.0.1:27017/sails",
            "secret": "lishenggen"
        },
        dingtalk: {
        	jsapi: {
        		corpId: 'dingbb4b33cbdeb6e17035c2f4657eb6378f',
				secret: 'lB_t9hN60kOat5v81sWGwv_QKJJPE4OjoAJHI20SsFWW1-R80PeNlM6c1vOLDXaT',
                agentId: 40592928
        	}
        },
        host: "http://localhost",
        port: 3000,
        project: 'dingtalk' //dingtalk or weixin
    }
};
