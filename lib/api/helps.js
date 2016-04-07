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

    if (!results || !results.length) {
      ctx.body = [];
      return;
    }

    const map = {};
    results = results.map(function (item) {
      let help = item.data();
      help.helps = [];
      map[help.id] = help;
      return help;
    });

    results.forEach(function (help) {
      if (help.parent && map[help.parent]) {
        map[help.parent].helps.push(help);
      }
    });

    ctx.body = results.filter(function (help) {
      return !help.parent;
    });
  });

  return function (_x) {
    return ref.apply(this, arguments);
  };
})();