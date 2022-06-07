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
  // Create 2D table that memoizes results of checking each case; initialize [0,0] to be true (empty string === empty pattern), rest of table false
  // let truthTable = [...new Array(s.length + 1)].map(() => {
  //   return new Array(p.length + 1).fill(false);
  // });

  let truthTable = new Array(s.length + 1).fill(false).map( x => new Array(p.length + 1).fill(false) );
  truthTable[0][0] = true;

  // Account for patterns like a*  b*a* etc
  for (j = 1; j < truthTable.length; j++) {
    if (p[j - 1] === '*') {
      truthTable[0][j] = truthTable[0][j - 2];
    }
  }

  for (i = 1; i <= s.length; i++) {
    for (j = 1; j <= p.length; j++) {
      // 3 cases:
      // 1) Current letter in string matches current letter in pattern AND previous string & previous pattern matched then TRUE
        // s[i] === p[j] ||  p[j] === '.'
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        truthTable[i][j] = truthTable[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // 2) Current letter in string is '*'
          //   a) 0 cases of letter preceding '*'. If the string[i] matches pattern[j - 2] (pattern before char, *) then TRUE
        if (truthTable[i][j - 2]) { 
          truthTable[i][j] = truthTable[i][j - 2];
          //   b) 1 or more cases of letter preceding '*'. If the current string s[i] matches letter before '*' or if the letter before '*' is '.' then
          // check if one fewer case of letter before '*' matches pattern. If matches then YES
        } else if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          truthTable[i][j] = truthTable[i - 1][j];
          // 3) Else false
        }
      }
    }
  }
  console.log(truthTable[s.length][p.length])
  return truthTable[s.length][p.length];
};

isMatch('aa', 'a*')
/*
Input:
"aa"
"a*"
Output:
false
Expected:
true

*/

/*
        Pattern
          0 a *
String 0 T F T
        a
        a

*/