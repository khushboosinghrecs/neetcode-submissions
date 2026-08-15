class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


    // return s.split('').sort().join() === t.split('').sort().join()    }
    // nlog(n)

    // function swapIndices(str, i, j) {
//   let arr = str.split("");
//   [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap using destructuring
//   return arr.join("");
// }

//     let i=0, j=0, n= s.length, k = t.length;
//     while(i<n && j<k){
//        let curr_ele = s[i];
//         while(j<k){
//             if(t[j] === curr_ele){
//       t = swapIndices(t, i, j);
//       break;
//             }
//                 j++;
//         } 
//         i++;
//         j=i;
//     }
//     return s === t;
// }
// O(n*k)


  if (s.length !== t.length) return false;

  const freq = {};

  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!freq[ch]){
         return false};
    freq[ch]--;
  }
  return true;
//   O(n)
    }

}
