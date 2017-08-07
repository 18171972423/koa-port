'use strict';var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var inspect = require('util').inspect;
var path = require('path');
var os = require('os');
var fs = require('fs');
var Busboy = require('busboy');

/**
                                 * 同步创建文件目录
                                 * @param  {string} dirname 目录绝对地址
                                 * @return {boolean}        创建目录结果
                                 */
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

/**
   * 获取上传文件的后缀名
   * @param  {string} fileName 获取上传文件的后缀名
   * @return {string}          文件后缀名
   */
function getSuffixName(fileName) {
  var nameList = fileName.split('.');
  return nameList[nameList.length - 1];
}

/**
   * 上传文件
   * @param  {object} ctx     koa上下文
   * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
   * @return {promise}         
   */
function uploadFile(ctx, options) {
  var req = ctx.req;
  var res = ctx.res;
  var busboy = new Busboy({ headers: req.headers });

  // 获取类型
  var fileType = options.fileType || 'common';
  var filePath = path.join(options.path, fileType);

  var mkdirResult = mkdirsSync(filePath);
  console.log(mkdirResult);
  return new _promise2.default(function (resolve, reject) {
    console.log('文件上传中...');
    var result = {
      success: false,
      formData: {}


      // 解析请求文件事件
    };busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      var fileName = Math.random().toString(16).substr(2) + '.' + getSuffixName(filename);
      var _uploadFilePath = path.join(filePath, fileName);
      var saveTo = path.join(_uploadFilePath);

      // 文件保存到制定路径
      file.pipe(fs.createWriteStream(saveTo));

      // 文件写入事件结束
      file.on('end', function () {
        result.success = true;
        result.message = '文件上传成功';

        console.log('文件上传成功！');
        resolve(result);
      });
    });

    // 解析表单中其他字段信息
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('表单字段数据 [' + fieldname + ']: value: ' + inspect(val));
      result.formData[fieldname] = inspect(val);
    });

    // 解析结束事件
    busboy.on('finish', function () {
      console.log('文件上结束');
      resolve(result);
    });

    // 解析错误事件
    busboy.on('error', function (err) {
      console.log('文件上出错');
      reject(result);
    });

    req.pipe(busboy);
  });

}


module.exports = {
  uploadFile: uploadFile };
//# sourceMappingURL=uploadFile.js.map