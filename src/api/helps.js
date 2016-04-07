/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-07
 * @author Li Yudeng <li@maichong.it>
 */

import Help from '../models/Help';

export default async function (ctx) {
  let results = await Help.find({
    activated: true
  });

  if (!results || !results.length) {
    ctx.body = [];
    return;
  }

  const map = {};
  results = results.map(item => {
    let help = item.data();
    help.helps = [];
    map[help.id] = help;
    return help;
  });

  results.forEach(help => {
    if (help.parent && map[help.parent]) {
      map[help.parent].helps.push(help);
    }
  });

  ctx.body = results.filter(help => !help.parent);
}
