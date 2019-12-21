// Input: "III"
// Output: 3
//
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
       let map = { M: 1000,
              D: 500,
              C: 100,
              L: 50,
              X: 10,
              V: 5,
              I: 1
     }
     let sum = 0
     for (let i=0; i < s.length; i++) {
         console.log(i);
         if (i === s.length - 1) {
             sum += map[s[i]]
             break
         }
         if (map[s[i]] >= map[s[i+1]]) {
             sum += map[s[i]]
         }
         else {
             sum += map[s[i+1]] - map[s[i]]
             i += 1
         }
     }
    return sum

};
