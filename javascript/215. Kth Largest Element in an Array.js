/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let n = nums.length;
    var swap = function(a, i, j){
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    // return the index of the kth smallest number
    var quickSelect = function(a, lo, hi, k){
        // use quick sort's idea
        // put nums that are <= pivot to the left
        // put nums that are  > pivot to the right
        let i = lo, j = hi, pivot = a[hi];
        while(i < j){
            if (a[i++] > pivot){
                swap(a, --i, --j);
            }
        } 
        swap(a, i, hi);
        // count the nums that are <= pivot from lo
        let m = i - lo + 1;
        // pivot is the one!
        if (m == k){
            return i;
        // pivot is too big, so it must be on the left
        }else if (m > k) {
            return quickSelect(a, lo, i - 1, k);
        }
        // pivot is too small, so it must be on the right
        return quickSelect(a, i + 1, hi, k - m);

    }
    let p = quickSelect(nums, 0, n - 1, n - k + 1);
    return nums[p];
    
};


