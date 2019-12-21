// Input: 123
// Output: 321


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var number = parseFloat(x.toString().split('').reverse().join(''));
    var num = number * Math.sign(x);
    return num <= Math.pow(2, 31) && num >= -Math.pow(2, 31) ? num : 0;

};
