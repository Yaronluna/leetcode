/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let c1 = 999999, c2 = 999999;
  for(let i = 0; i < nums.length; i++ ){
    let x = nums[i];
    if (x <= c1) {
      c1 = x;           // c1 is min seen so far (it's a candidate for 1st element)
    }else if (x <= c2){
      c2 = x; 
    }else{
      return true
    }
  }
  return c1;
};


bool increasingTriplet(vector<int>& nums) {
    int c1 = INT_MAX, c2 = INT_MAX;
    for (int x : nums) {
        if (x <= c1) {
            c1 = x;           // c1 is min seen so far (it's a candidate for 1st element)
        } else if (x <= c2) { // here when x > c1, i.e. x might be either c2 or c3
            c2 = x;           // x is better than the current c2, store it
        } else {              // here when we have/had c1 < c2 already and x > c2
            return true;      // the increasing subsequence of 3 elements exists
        }
    }
    return false;
}