/*
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a 
sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
Example 2:

Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []
 

Constraints:

1 <= s.length <= 20
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 10
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var wordBreak = function(s, wordDict) {
  // DP solution- array where the index is true if some word in wordDict can reach a NONFALSE index
  // Decrementing through string, at each index
    // Loop through words checking if they can start at the current s[index] and reach a NONFALSE index
    // Optimization- Skip current word if the length doesn't land in a true spot, or if it goes out of bounds
    // If any words are found true, record the true words in the index, and concatenating the string from the true index it lands on
  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = [''];

  for (let i = s.length - 1; i >= 0; i--) {
    let currentIndexStrings = [];

    for (let j = 0; j < wordDict.length; j++) {
      let foundWord = false;
      if (dp[i + wordDict[j]] === false || i + wordDict[j].length >= s.length + 1) continue;
      for (let k = 0; k < wordDict[j].length; k++) {
        if (s[i + k] !== wordDict[j][k]) break;
        if (k === wordDict[j].length - 1) foundWord = true;
      }
      if (foundWord) {
        for (let l = 0; l < dp[i + wordDict[j].length].length; l++) {
          if (i + wordDict[j].length !== s.length) currentIndexStrings.push(wordDict[j] + ' ' + dp[i + wordDict[j].length][l]);
          else currentIndexStrings.push(wordDict[j])
        }
      }
    }
    if (currentIndexStrings.length > 0) dp[i] = [...currentIndexStrings]; // Can prob push straight to dp[i];
  }
  if (dp[0].length > 0) return dp[0];
  else return [];
};

wordBreak("catsanddog", ["cat","cats","and","sand","dog"])
/*
Your input
"catsanddog"
["cat","cats","and","sand","dog"]
Output
[]
Expected
["cats and dog","cat sand dog"]

*/