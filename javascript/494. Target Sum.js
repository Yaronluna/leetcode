/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  if (nums == null || nums.length == 0){
    return 0;
  }

  var helper = function(nums, index, sum, S, map) {
    let encodeString = index + "->" + sum;
    if (map[encodeString] !== undefined){
      return map[encodeString];
    }
    if (index == nums.length){
      if (sum == S){
        return 1;
      }else {
        return 0;
      }
    } 
    let curNum = nums[index];
    let add = helper(nums, index + 1, sum - curNum, S, map);
    let minus = helper(nums, index + 1, sum + curNum, S, map); 
    map[encodeString] = add + minus;
    return add + minus;
  }

  return helper(nums, 0, 0, S, {});
};