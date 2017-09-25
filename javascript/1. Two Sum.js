/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 # put the offset into the map.
 */
var twoSum = function(nums, target) {
  if(nums === null || nums.length < 1){
    return null;    
  }
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let offset = target - nums[i];
    if(map[nums[i]] !== undefined){
      return [map[nums[i]], i];
    }else{
      map[offset] = i;
    }
  }
  return [0,0] ;
    
};