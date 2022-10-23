//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let phrase = "";
    let result = "";
    let word = strs[0];
    for(let j = 0; j < word.length; j++) {
         let i = 0;
          phrase += word[j];
   while (i < strs.length) {
        if(strs[i].startsWith(phrase)){
            i++;
        } else {
            return phrase.slice(0,j);
        }}
  }
    return phrase 
};
