/**
 * Created by lixiaoyu on 16-4-6.
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
        console.log(result[i].parent);
        result.splice(i, 1);
        i -= 1;
      }
    }
  }
  ctx.body = result;
}
