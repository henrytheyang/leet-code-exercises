/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
  // Create dp array that tracks if it's possible to reach the end of the string from the current index
  // dp[i] is true if
    // it can reach the end of the string with a word from the dictionary
    // it can reach dp[someIndex], where dp[someIndex] is true
  // If we can make it to dp[0] and dp[0] is true, return true; else return false
  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {

    for (let j = 0; j < wordDict.length; j++) {
      let indexTrue = false;
      // Iterate through wordDict, checking if word can reach either end of string or true dp[i];
      // Skip to next word if word length and index don't add to a true index
      if (dp[wordDict[j].length + i] === false || wordDict[j].length + i >= s.length + 1) continue;
      // Check if currrent word starting on current index can end on a true dp[someIndex]
      for (let k = 0; k < wordDict[j].length; k++) {
        if (wordDict[j][k] !== s[i + k]) break;
        if (k = wordDict[j].length - 1) indexTrue = true;
      }
      if (indexTrue) {
        dp[i] = true
        break;
      }
    }
  }
  if (dp[0]) return true;
  else return false;
};
wordBreak('leetcode', ["leet","code"])
/*
Your input
"leetcode"
["leet","code"]
Output
false
Expected
true
*/