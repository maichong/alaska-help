/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-07
 * @author Li Yudeng <li@maichong.it>
 */

import alaska from 'alaska';

/**
 * @class HelpService
 */
export default class HelpService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = 'alaska-help';
    options.dir = __dirname;
    super(options, alaska);
  }
}
