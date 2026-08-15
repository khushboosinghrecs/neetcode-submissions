class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        let map = new Map();
        for(const c of nums){
            if(map[c]) return true;
            map[c] = 1
        }
        return false;
        }
}
