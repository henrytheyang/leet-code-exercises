/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // Sort each string, recording original string
  // Compare sorted string to all encountered archetype
    // If there's a match, add it to the matched answer array
    // If there's no match, make a new answer array and add to archetype
  let answer = [];
  let archetypes = {};
  let sorted = [...strs];
  for (let i = 0; i < sorted.length; i++) {
    sorted[i] = [...sorted[i]].sort().join('');
  }

  for (let j = 0; j < sorted.length; j++) {
    if (sorted[j] in archetypes === false) {
      archetypes[sorted[j]] = {answerIndex: answer.length};
      answer.push([strs[j]])
    } else {
      answer[archetypes[sorted[j]].answerIndex].push(strs[j]);
    }
  }

  return answer;
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/