/**
 * @param {string[]} strs
 * @return {string}
 */

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Edge cases:
  //  1. Strs is empty. Return empty string
  //  2. Strs has one term. Return entire term

var longestCommonPrefix = function(strs) {
  // Build a prefix using first element in the array
  // Compare each letter of subsequent elements to the prefix
  // If all match, continue building the prefix; if we hit a NOMATCH, immediately return the prefix
  let prefix = '';
  let comparator = '';
  // Scan the comparator
  let comparatorMatches = true;
  if (strs.length === 0) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  }
  for (i = 0; i < strs[0].length; i++) {
    // Scan for each element in the array of strings
    for (j = 1; j < strs.length; j++) {
      comparator = strs[0][i];
      if (comparator !== strs[j][i]) {
        comparatorMatches = false;
        break;
      }
    }
    if (!comparatorMatches) {
      break;
    }
    prefix = prefix + comparator;
  }
  return prefix;
};
