/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  if(num.length <= 1 || num === null){
    return num;
  }
  let str = num.toString();    
  let digits = [];
  let buckets = [];

  for (let i = 0; i < str.length; i++) {
    digits[i] = str.charAt(i);
   
  }
  for (let i = 0; i < digits.length; i++) {
    buckets[ parseInt(digits[i])] = i;
  }
    
        
  for (let i = 0; i < digits.length; i++) {
      for (let k = 9; k > digits[i] - '0'; k--) {
          if (buckets[k] > i) {
              let tmp = digits[i];
              digits[i] = digits[buckets[k]];
              digits[buckets[k]] = tmp;
              return parseInt(digits.join(""));
          }
      }
  }
  
  return num;
}
