class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // let m = strs.map((ele)=> ele.split('').sort().join(''));
        const res = {};

            for(let s of strs){
                const st = s.split('').sort().join('');

                if(res[st]){
                    res[st].push(s)
                }
                else{
                    res[st] = [s]
                }
            }
            return Object.values(res);
    }
}
