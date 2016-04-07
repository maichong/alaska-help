'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Help = require('../models/Help');

var _Help2 = _interopRequireDefault(_Help);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @copyright Maichong Software Ltd. 2016 http://maichong.it
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @date 2016-04-07
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author Li Yudeng <li@maichong.it>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

exports.default = (() => {
  var ref = _asyncToGenerator(function* (ctx) {
    let results = yield _Help2.default.find({
      activated: true
    });
    let result = [];
    if (results && results.length > 0) {
      result = results.map(function (item) {
        return item.data();
      });
      for (let i = 0; i < result.length; i++) {
        let item = result[i];
        for (let j = 0; j < result.length; j++) {
          if (String(result[j].parent) === item.id) {
            if (!item.helps) {
              item = Object.assign({}, item, { helps: [] });
            }
            item.helps.push(result[j]);
          }
        }
        result[i] = item;
      }
      for (let i = 0; i < result.length; i++) {
        if (result[i].parent) {
          result.splice(i, 1);
          i -= 1;
        }
      }
    }
    ctx.body = result;
  });

  function helps(_x) {
    return ref.apply(this, arguments);
  }

  return helps;
})();