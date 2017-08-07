'use strict';exports.__esModule = true;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_mongoose2.default.connect('mongodb://127.0.0.1/koa', { server: { auto_reconnect: true } });

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.set('debug', true);

var db = _mongoose2.default.connection;

db.once('open', function () {
    console.log('连接成功');
});

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    _mongoose2.default.disconnect();
});


db.on('close', function () {
    console.log('数据库断开，重新连接数据库');
    _mongoose2.default.connect('mongodb://127.0.0.1/koa', { server: { auto_reconnect: true } });
});exports.default =


db;module.exports = exports['default'];
//# sourceMappingURL=db.js.map