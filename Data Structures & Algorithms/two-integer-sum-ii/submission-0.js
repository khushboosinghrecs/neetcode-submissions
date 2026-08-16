class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i =0, j=numbers.length-1;

        while(i<j){
            if(target === numbers[i] + numbers[j]) {
                return [i+1, j+1];
                }
            if(target < numbers[i] + numbers[j]) j--;
            else i++;
        }
    }
}
