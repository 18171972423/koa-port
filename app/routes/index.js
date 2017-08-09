'use strict';exports.__esModule = true;var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _index = require('../controllers/index');var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var router = (0, _koaRouter2.default)();


// router.get('/',Index.saveIphone)

router.post('/callIphone', _index2.default.callIphone);

router.post('/delIphone', _index2.default.delIphone);

router.post('/getCode', _index2.default.getCode);

router.post('/checkCode', _index2.default.checkCode);

router.get('/', function (ctx, next) {
    // ctx.body = `<form method="POST" action="/file" enctype='multipart/form-data'> 请选择上传的文件：<input type="file" name="upfiles"> <input type="type" name="name" />  <input type="submit" value="OK"> </form>`
    if (ctx.session.view === undefined) {//统计访问次数
        ctx.session.view = 0;

    } else {
        ctx.session.view += 1;
    }

    ctx.body = ctx.session.view;

});
router.get('/files', function (ctx, next) {
    ctx.session.count = ctx.session.count + 1;
    ctx.body = ctx.session;
});


router.post('/file', _index2.default.file);exports.default =

router;module.exports = exports['default'];

//# sourceMappingURL=index.js.map