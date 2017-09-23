/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if(citations === null|| citations.length <= 0){
    return 0;
  }
  
  let count = 0, len = citations.length;
  console.log( citations)
  for(let i = citations.length-1; i >= 0; i++){
    if(citations[i] >= len - i ){
      count = len - i ;
    }else{
      return count;
    }
  }
  return count;
};