// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
 let string = s.trimEnd();
 let arr = string.split(" ");
 let lastWord = arr[`${arr.length - 1}`];
    return lastWord.length;
};
