//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = [];
    let index = 0
    let number = x.toString();
    let length = number.length;
    for(let i = 0; i < length; i++) {
       if ((number[index]) == (number[length - (1 + index)])) {
           arr.push(number[index]);
           index++;
            if (arr.length == length) {
            return true;}
       } else {
           return false;
       }
    }
};
