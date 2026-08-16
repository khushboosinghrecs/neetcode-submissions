class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        // const arr = Object.entries(count).map(([num, freq]) =>[freq, parseInt(num)]);
        // arr.sort((a, b)=> b[0]-a[0]);
        // return arr.splice(0,k).map((pair) => pair[1]);

        const arr = Object.entries(count);
        arr.sort((a, b) => b[1]-a[1]);

        return arr.splice(0, k).map((ele)=> ele[0]);
    }
}
