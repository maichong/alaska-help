/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-07
 * @author Li Yudeng <li@maichong.it>
 */

import Help from '../models/Help';
export default async function helps(ctx) {
  let results = await Help.find({
    activated: true
  });
  let result = [];
  if (results && results.length > 0) {
    result = results.map(item=> {
      return item.data();
    });
    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      for (let j = 0; j < result.length; j++) {
        if (String(result[j].parent) === item.id) {
          if (!item.helps) {
            item = Object.assign({}, item, {helps: []});
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
}
