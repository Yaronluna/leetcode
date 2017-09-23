/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if(citations === null|| citations.length <= 0){
    return 0;
  }
  citations.sort(function(a, b){return a-b}).reverse();
  count = 0;
  console.log( citations)
  for(let i = 0; i < citations.length; i++){
    if(citations[i] >= i + 1){
      console.log( citations[i] + " : " + i)
      count = i+1;
    }else{
      return count;
    }
  }
  return count;
};