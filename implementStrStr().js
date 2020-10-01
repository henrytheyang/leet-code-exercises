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
  // Two pointers
  for (i = 0; i <= haystack.length - needle.length; i++) {
    let needleIndex = 1
    // Scan haystack for first character of needle
    if (haystack[i] !== needle[0]) {
      continue;
    }
    // Edge case to cover needle.length === 1;
    if (needle.length === 1) {
      return i;
    }
    // Once first is located, scan successive characters (i is first char of needle, j is successive chars)
    for (j = i + 1; j <= i + needle.length - 1; j++) {
      // If the whole needle is not present, exit interior loop and continue w/ exterior loop by advancing the first pointer
      if (haystack[j] !== needle[needleIndex]) {
        break;
      }
      if (needleIndex + 1 === needle.length) {
        // If the whole needle is present, reassign answer to index
        answer = i;
        return answer;
      }
      needleIndex++;
      // Continue until there aren't enough characters left to find whole needle
    }

  }
  return answer
};

console.log(strStr('hello', 'll'));