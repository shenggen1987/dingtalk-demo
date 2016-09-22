import routes from './routes';

dd.config({
    agentId: _config.agentId,
    corpId: _config.corpId,
    timeStamp: _config.timeStamp,
    nonceStr: _config.nonceStr,
    signature: _config.signature,
    jsApiList: ['device.notification.confirm',
        'device.notification.alert',
        'device.notification.prompt',
        'biz.chat.chooseConversation','runtime.permission.requestAuthCode',
        'biz.ding.post']
});


dd.error(function(err) {
    alert('dd error: ' + JSON.stringify(err));
});


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('App'));
});
