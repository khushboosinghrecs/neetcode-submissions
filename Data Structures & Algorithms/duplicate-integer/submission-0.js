class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        let i = 0, n = nums.length;

        while(i < n){
            if(map.get(nums[i])) return true;
            else map.set(nums[i], 1);
            i++;
        }

        return false;
    }
}
