var _ = require('underscore');
var env = process.env.NODE_ENV || 'dev';
env = env === 'test' ? 'dev':env;

var configStatic = require('../static_conf')[env];

module.exports = _.assign(configStatic, {
    db: {
        url: configStatic.db.url
    },
    secret: configStatic.db.secret,
    local_dir: __dirname
});