'use strict';exports.__esModule = true;var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _index = require('../controllers/index');var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var router = (0, _koaRouter2.default)();

router.get('/', _index2.default.saveIphone);

router.post('/callIphone', _index2.default.callIphone);

router.post('/delIphone', _index2.default.delIphone);exports.default =


router;module.exports = exports['default'];

//# sourceMappingURL=index.js.map