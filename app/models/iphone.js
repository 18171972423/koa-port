'use strict';exports.__esModule = true;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schema = _mongoose2.default.Schema;

var SaveIphone = new Schema({
    iphone: {
        type: Number,
        required: true } });



SaveIphone.index({ id: 1 });

var adminModel = void 0;
if (!_mongoose2.default.models.save) {
    adminModel = _mongoose2.default.model('save', SaveIphone);
} else {
    adminModel = _mongoose2.default.model('save');
}exports.default =


adminModel;module.exports = exports['default'];
//# sourceMappingURL=iphone.js.map