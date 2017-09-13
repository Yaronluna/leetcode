/**
 this question want to return an interage, so we compare a | 0 in end
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let r = x;
  while (r*r > x){
      r = Math.floor((r + x/r) / 2);
  }

  return  r; 
};