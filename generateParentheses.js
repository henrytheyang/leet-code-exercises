/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // # open >= # closed
  let stack = [];
  let openCounter = 0;
  
  // Use stack to track open/closed status, use counter to track how many opens used
    // If stack is empty, must use open next
    // Once all opens are used the rest must be closed
    // If stack is not empty, add either open or closed
    // Recurse
  
  const addNextParenthesis = (prevStrings, counter) => {

  };

};