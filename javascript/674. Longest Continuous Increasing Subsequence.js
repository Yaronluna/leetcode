/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  if(num.length <= 1 || num === null){
    return num;
  }

  let nums = num.toString().split("");
  let buckets = [];

  for(let i = 0; i < nums.length; i++){
    buckets[parseInt(nums[0])] = i;
  }

  for(let i = 0; i < nums.length; i++){
    for(let k = 9; k > parseInt(nums[0]; k--){

    }

  }
  let max = parseInt(nums[0]);
  let maxIndex = 0, repIndex = 0;
  


  return nums;
};

