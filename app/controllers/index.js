'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _admin = require('../prototype/admin');var _admin2 = _interopRequireDefault(_admin);
var _iphone = require('../models/iphone');var _iphone2 = _interopRequireDefault(_iphone);
var _uploadFile = require('../config/uploadFile');
var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

SaveIphone = function (_Admin) {(0, _inherits3.default)(SaveIphone, _Admin);
    function SaveIphone() {(0, _classCallCheck3.default)(this, SaveIphone);var _this = (0, _possibleConstructorReturn3.default)(this,
        _Admin.call(this));
        _this.saveIphone = _this.saveIphone.bind(_this);
        _this.login = _this.login.bind(_this);return _this;
    }SaveIphone.prototype.

    saveIphone = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var iphone, data, newTel;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

                            iphone = ctx.query.iphone;_context.next = 4;return (
                                _iphone2.default.find({ iphone: iphone }));case 4:data = _context.sent;if (!(

                            data.length == 0)) {_context.next = 12;break;}
                            newTel = {
                                iphone: iphone };_context.next = 9;return (

                                _iphone2.default.create(newTel));case 9:
                            ctx.body = {
                                code: 200,
                                message: '手机号添加成功' };_context.next = 13;break;case 12:


                            ctx.body = {
                                code: 400,
                                message: '手机号已添加过' };case 13:_context.next = 18;break;case 15:_context.prev = 15;_context.t0 = _context['catch'](0);




                            console.log(_context.t0);case 18:case 'end':return _context.stop();}}}, _callee, this, [[0, 15]]);}));function saveIphone(_x, _x2) {return _ref.apply(this, arguments);}return saveIphone;}();SaveIphone.prototype.



    callIphone = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {var data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return (

                                _iphone2.default.find(ctx.query));case 3:data = _context2.sent;
                            if (data.length > 0) {
                                ctx.body = data;
                            } else {
                                ctx.body = {
                                    code: 400,
                                    message: '无查询数据' };

                            }_context2.next = 10;break;case 7:_context2.prev = 7;_context2.t0 = _context2['catch'](0);


                            console.log(_context2.t0);case 10:case 'end':return _context2.stop();}}}, _callee2, this, [[0, 7]]);}));function callIphone(_x3, _x4) {return _ref2.apply(this, arguments);}return callIphone;}();SaveIphone.prototype.



    delIphone = function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {var findData, data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;_context3.next = 3;return (

                                _iphone2.default.find(ctx.query));case 3:findData = _context3.sent;if (!(
                            findData.length == 0)) {_context3.next = 7;break;}
                            ctx.body = {
                                code: 300,
                                message: '删除失败' };return _context3.abrupt('return');case 7:_context3.next = 9;return (



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
                                }));case 9:data = _context3.sent;_context3.next = 15;break;case 12:_context3.prev = 12;_context3.t0 = _context3['catch'](0);

                            console.log(_context3.t0);case 15:case 'end':return _context3.stop();}}}, _callee3, this, [[0, 12]]);}));function delIphone(_x5, _x6) {return _ref3.apply(this, arguments);}return delIphone;}();return SaveIphone;}(_admin2.default);exports.default =








new SaveIphone();module.exports = exports['default'];

//# sourceMappingURL=index.js.map