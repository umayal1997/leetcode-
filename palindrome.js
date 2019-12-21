// Input: 121
// Output: true
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var number = x.toString().split('').reverse().join('');
    return (number == x) ? true:false;


};
