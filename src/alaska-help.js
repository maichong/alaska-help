/**
 * Created by lixiaoyu on 16-4-6.
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
