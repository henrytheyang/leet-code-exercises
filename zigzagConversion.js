/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
Accepted
848,229
Submissions
1,983,778
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // The strings for each row are built up one at a time
  // Distribute the input strings to them one at a time, then return them mashed up
  let buildingStrings = [];
  let answer = '';
  let currentRowIndex = 0;
  let isIncreasing = true;
  
  if (numRows === 1) return s;
  for (let i = 0; i < numRows; i++) {
    buildingStrings[i] = new Array();
  }

  for (let j = 0; j < s.length; j++) {
    buildingStrings[currentRowIndex].push(s[j]);
    if (isIncreasing) {
      if (currentRowIndex < numRows - 1) currentRowIndex++;
      else if (currentRowIndex === numRows - 1) {
        isIncreasing = false;
        currentRowIndex--;
      }
    }
    else if (!isIncreasing) {
      if (currentRowIndex > 0) currentRowIndex--;
      else if (currentRowIndex === 0) {
        isIncreasing = true;
        currentRowIndex++;
      }
    }
  }

  for (let k = 0; k < buildingStrings.length; k++) {
    answer = answer.concat(buildingStrings[k].join(''))
  }

  return answer;
};
convert("AB", 1);
/*
Your input
"AB"
1
Output

*/