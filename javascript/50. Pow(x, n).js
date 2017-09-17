/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
for eample
    N = 9 = 2^3 + 2^0 = 1001 in binary. Then:
    x^9 = x^(2^3) * x^(2^0)
*/
var myPow = function(x, n) {    
  return (n < 0) ? ( 1 / pow(x, n)) : pow(x, n);
};

function pow(x, n) {
  if (n == 0) {
      return 1;
  }

  // if x = 3 and n = 5
  // v = 81

  // if n = 0.5
  // v = 
  
  var v = pow(x, parseInt(n/2));
  
  if (n % 2 === 0) {
      return v * v;
  }
  
  return v * v * x;
}