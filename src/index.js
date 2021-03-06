/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-07
 * @author Li Yudeng <li@maichong.it>
 */

import alaska from 'alaska';

/**
 * @class HelpService
 */
class HelpService extends alaska.Service {
  constructor(options) {
    options = options || {};
    options.dir = options.dir || __dirname;
    options.id = options.id || 'alaska-help';
    super(options);
  }
}

export default new HelpService();
