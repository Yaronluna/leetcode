/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let rule = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
  };

  if(s.length == 1){
    return rule[s];
  }

  let sum = rule[s.charAt(s.length - 1)];

  for (let i = s.length - 2; i >= 0; i--) {
    if ( rule[s.charAt(i)] <  rule[s.charAt(i+1)]) {
      sum -= rule[s.charAt(i)];
    } else {
      sum += rule[s.charAt(i)];
    }
  }
  return sum;
};