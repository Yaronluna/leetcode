/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  if (nums.length < 2 || nums === null){
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0){
      nums[i] = -1;
    }
  }
  let sumToIndex = {};
  let sum = 0, max = 0;

  sumToIndex[0] = -1;
  for(let i=0;i<nums.length;i++){
    sum += nums[i];
    
      
      if(sumToIndex[sum] !== undefined){
          max=Math.max(max,i -sumToIndex.containsKey(sum));
      }else{
          map[sum] = i;
      }
  }
  return max;
    
};

  