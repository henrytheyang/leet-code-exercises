/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.


Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // Track each letter of s
  // Iterate through t
    // If letter not in storage, return false
    // Decrement count of storage if found
    // Delete storage of letter when count === 1
  // If length of storage keys === 0 return true else false
  let storage = {};
  for (let i = 0; i < s.length; i++) {
    storage[s[i]] = storage[s[i]] === undefined? 1 : storage[s[i]] + 1;
  }
  for (let j = 0; j < t.length; j++) {
    if (storage[t[j]] === undefined) return false;
    if (storage[t[j]] > 1) storage[t[j]]--;
    else delete storage[t[j]];
  }
  if (Object.keys(storage).length === 0) return true;
  else return false;
};
isAnagram('anagram', 'nagaram');

/*
Input: s = "anagram", t = "nagaram"
Output: true
*/
