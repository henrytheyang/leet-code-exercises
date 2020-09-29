/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Constraints:
haystack and needle consist only of lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let answer = -1;
  if (needle.length === 0) {
    return 0
  }
  console.log('dont get here if needle.length === 0')
  if (needle.length !== 0) {
    // Two pointers
    // scan haystack for first character of needle
      // Once first is located, scan successive characters
        // If the whole needle is present, reassign answer to index
        // If the whole needle is not present, continue loop by advancing the first pointer and repeating
      // Continue until there aren't enough characters left to find whole needle
  }
  console.log(`after if statement, answer = ${answer}`);
  return answer
};

strStr('hello', '');
console.log(strStr('hello', ''));