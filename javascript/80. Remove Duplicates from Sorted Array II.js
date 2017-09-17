/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if (nums.length == 0 || nums === null ){
    	return 0;
    }
    if(nums.length <= 2){
    	return nums.length;
    }

    let len = nums.length,
        cur = [nums[0], nums[1]],
        i, // original array's index
        j; // new array's index

    
    for (i = 2, j = 1; i < len; i++) {
    		if(nums[i] != cur[1] || nums[i] != cur[0]){
    			j++;
    			nums[j] = nums[i];
    			cur[0] = cur[1];
    			cur[1] = nums[i];
    		}
        
    }
    
    return j + 1;
};