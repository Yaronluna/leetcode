/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  if(A === null || B === null ){
    return [];
  }

  let C = [];
  for(let i = 0; i < A.length; i++ ){
    let Ctemp = []
    for(let j = 0; j < B[0].length; j++ ){
      Ctemp[j] = 0; 
    } 
    C[i] = Ctemp;
  }
  for(let i = 0; i < A.length; i++ ){
    for(let j = 0; j < B[0].length; j++ ){
      let sum = 0;
      for(let k = 0; k < B.length; k++ ){
        sum += A[i][k] * B[k][j];
      }
      C[i][j] = (isNaN(sum))? 0 : sum;  
    } 
  }
  return C; 
};