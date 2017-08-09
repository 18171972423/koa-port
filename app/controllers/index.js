'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _admin = require('../prototype/admin');var _admin2 = _interopRequireDefault(_admin);
var _iphone = require('../models/iphone');var _iphone2 = _interopRequireDefault(_iphone);
var _formidable = require('formidable');var _formidable2 = _interopRequireDefault(_formidable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

SaveIphone = function (_Admin) {(0, _inherits3.default)(SaveIphone, _Admin);
    function SaveIphone() {(0, _classCallCheck3.default)(this, SaveIphone);var _this = (0, _possibleConstructorReturn3.default)(this,
        _Admin.call(this));
        _this.saveIphone = _this.saveIphone.bind(_this);return _this;
    }
    //获取验证码
    SaveIphone.prototype.getCode = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var phone, _phoneCode, nowTime, _code, key;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

                            phone = ctx.query.phone;
                            console.log(ctx.session);if (
                            phone) {_context.next = 6;break;}
                            ctx.body = {
                                status: 0,
                                message: '入参异常' };return _context.abrupt('return',

                            true);case 6:

                            _phoneCode = ctx.session._phoneCode;
                            nowTime = Date.now();if (!(
                            _phoneCode && nowTime - _phoneCode.time < 12000)) {_context.next = 11;break;}
                            ctx.body = {
                                status: 0,
                                message: '12秒后重新发送' };return _context.abrupt('return',

                            true);case 11:

                            _code = ('000000' + parseInt(Math.random() * 1000000)).substr(-6);
                            key = '' + Date.now() + phone;
                            ctx.session._phoneCode = {
                                key: key,
                                time: Date.now(),
                                code: _code };


                            ctx.body = {
                                status: 1,
                                message: '发送成功',
                                code: _code };_context.next = 20;break;case 17:_context.prev = 17;_context.t0 = _context['catch'](0);



                            console.log(_context.t0);case 20:case 'end':return _context.stop();}}}, _callee, this, [[0, 17]]);}));function getCode(_x, _x2) {return _ref.apply(this, arguments);}return getCode;}();


    //验证验证码
    SaveIphone.prototype.checkCode = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {var code, _phoneCode, sessionCode;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

                            code = ctx.query.code;
                            _phoneCode = ctx.session._phoneCode;if (!
                            _phoneCode) {_context2.next = 11;break;}if (!(
                            Date.now() - _phoneCode.time > 300000)) {_context2.next = 7;break;} //5分钟失效
                            ctx.body = {
                                status: 0,
                                message: '验证码失效' };return _context2.abrupt('return',

                            true);case 7:

                            sessionCode = _phoneCode.code;if (!(
                            sessionCode == code)) {_context2.next = 11;break;}
                            // ctx.session._phoneCode = null;
                            ctx.body = {
                                status: 1,
                                message: '验证成功' };return _context2.abrupt('return',

                            true);case 11:


                            ctx.body = {
                                status: 0,
                                message: '验证码不正确' };_context2.next = 16;break;case 14:_context2.prev = 14;_context2.t0 = _context2['catch'](0);case 16:case 'end':return _context2.stop();}}}, _callee2, this, [[0, 14]]);}));function checkCode(_x3, _x4) {return _ref2.apply(this, arguments);}return checkCode;}();SaveIphone.prototype.





    file = function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {var form;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                            try {
                                form = new _formidable2.default.IncomingForm();


                            } catch (err) {

                            }case 1:case 'end':return _context3.stop();}}}, _callee3, this);}));function file(_x5, _x6) {return _ref3.apply(this, arguments);}return file;}();SaveIphone.prototype.

    saveIphone = function () {var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, next) {var iphone, data, newTel;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.prev = 0;


                            iphone = ctx.query.iphone;_context4.next = 4;return (
                                _iphone2.default.find({ iphone: iphone }));case 4:data = _context4.sent;if (!(

                            data.length == 0)) {_context4.next = 12;break;}
                            newTel = {
                                iphone: iphone };_context4.next = 9;return (

                                _iphone2.default.create(newTel));case 9:
                            ctx.body = {
                                code: 200,
                                message: '手机号添加成功' };_context4.next = 13;break;case 12:


                            ctx.body = {
                                code: 400,
                                message: '手机号已添加过' };case 13:_context4.next = 18;break;case 15:_context4.prev = 15;_context4.t0 = _context4['catch'](0);




                            console.log(_context4.t0);case 18:case 'end':return _context4.stop();}}}, _callee4, this, [[0, 15]]);}));function saveIphone(_x7, _x8) {return _ref4.apply(this, arguments);}return saveIphone;}();SaveIphone.prototype.



    callIphone = function () {var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(ctx, next) {var data;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;_context5.next = 3;return (

                                _iphone2.default.find(ctx.query));case 3:data = _context5.sent;
                            if (data.length > 0) {
                                ctx.body = data;
                            } else {
                                ctx.body = {
                                    code: 400,
                                    message: '无查询数据' };

                            }_context5.next = 10;break;case 7:_context5.prev = 7;_context5.t0 = _context5['catch'](0);


                            console.log(_context5.t0);case 10:case 'end':return _context5.stop();}}}, _callee5, this, [[0, 7]]);}));function callIphone(_x9, _x10) {return _ref5.apply(this, arguments);}return callIphone;}();SaveIphone.prototype.



    delIphone = function () {var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(ctx, next) {var findData, data;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;_context6.next = 3;return (

                                _iphone2.default.find(ctx.query));case 3:findData = _context6.sent;if (!(
                            findData.length == 0)) {_context6.next = 7;break;}
                            ctx.body = {
                                code: 300,
                                message: '删除失败' };return _context6.abrupt('return');case 7:_context6.next = 9;return (



                                _iphone2.default.remove(ctx.query, function (err, data) {
                                    if (err) {
                                        ctx.body = {
                                            code: 400,
                                            message: '异常',
                                            data: err };

                                        return;
                                    } else {
                                        console.log(data);
                                        ctx.body = {
                                            code: 200,
                                            message: '删除成功' };

                                    }
                                }));case 9:data = _context6.sent;_context6.next = 15;break;case 12:_context6.prev = 12;_context6.t0 = _context6['catch'](0);

                            console.log(_context6.t0);case 15:case 'end':return _context6.stop();}}}, _callee6, this, [[0, 12]]);}));function delIphone(_x11, _x12) {return _ref6.apply(this, arguments);}return delIphone;}();return SaveIphone;}(_admin2.default);exports.default =








new SaveIphone();module.exports = exports['default'];

//# sourceMappingURL=index.js.map