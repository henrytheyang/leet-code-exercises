/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 

Constraints:

1 <= s.length <= 20
1 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
  let answer = true;
  // Create 2D table that memoizes results of checking each case; initialize [0,0] to be true (empty string === empty pattern);
  
  // 3 cases:
  // 1) Current letter in string matches current letter in pattern AND previous string & previous pattern matched then TRUE
  // s[i] === p[j] ||  p[j] === '.'
  // 2) Current letter in string is '*'
  //   a) 0 cases of letter preceding '*'. If the string[i] matches pattern[j - 2] (pattern before char, *) then TRUE
  //   b) 1 or more cases of letter preceding '*'. If the current string s[i] matches letter before '*' or if the letter before '*' is '.' then check if one fewer case of letter before '*' matches pattern. If matches then YES
  // 3) Else false


  return answer;
};

/*
Input
"aab"
"c*a*b"
Output
false
Expected
true
*/