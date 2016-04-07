'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alaska = require('alaska');

var _alaska2 = _interopRequireDefault(_alaska);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class HelpService
 */
class HelpService extends _alaska2.default.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = 'alaska-help';
    options.dir = __dirname;
    super(options, alaska);
  }
}
exports.default = HelpService; /**
                                * @copyright Maichong Software Ltd. 2016 http://maichong.it
                                * @date 2016-04-07
                                * @author Li Yudeng <li@maichong.it>
                                */