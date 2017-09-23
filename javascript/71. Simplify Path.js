/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let paths = [], arr = path.split('/');
  let cur, result = "";

  for (let i = 0; i < arr.length, i++){
    cur = arr[i];
    if (cur === '.' || cur.length === 0) {
      continue;
    }
    if (cur === '..') {
      if (paths.length > 0) {
        paths.pop();
      }
    } else {
      paths.push(cur);
    } 

  }

  for (let i = 0; i < paths.length, i++){
    result += '/' + paths[i]
  }
  if (result === '') {
    result = '/';
  }
  return result;
    
};
