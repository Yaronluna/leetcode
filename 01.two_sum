public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // init a int array with exactally two index
        int[] result = {0,0};
        
        // use brutal force, the average seek time for HashMap is O(1), it is better than 
        // using double loops, which give O(nlogn)
        Map<Integer, Integer> buffer = new HashMap<>();
        
        for(int i = 0; i < nums.length; i++){
            if (buffer.containsKey(target - nums[i])){
                result[1] = i;
                result[0] = buffer.get(target - nums[i]);
                return result;
            }else{
                buffer.put(nums[i], i);
            }
        }
        return result;
    }
}
