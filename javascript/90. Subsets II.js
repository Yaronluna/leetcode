/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [],
        len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    helper(nums, 0, len - 1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    var i;
    
    for (i = start; i <= end; i++) {
        // skip duplicates
        if (i > start && nums[i] === nums[i - 1]) {
            continue;
        }
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}