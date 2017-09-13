/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length,
        start = 0,
        end = len - 1,
        mid;
    
    while ( start <= end ){
        mid = Math.floor((start + end)/2);
        if(nums[mid] == target){
           return mid;
        
        // left side is sorted
        }else if(nums[start] <= nums[mid]){
            if(nums[start] <= target && nums[mid] > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
                 
                 
        // right site is sorted
        }else{
            if(nums[mid]< target && nums[end] >= target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
                 
        }
    }
                 
    return -1;
        
 
};