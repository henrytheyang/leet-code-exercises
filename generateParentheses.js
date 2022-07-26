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
  let stack = [];
  let counter = 0;
  let answer = [];
  
  const addNextParenthesis = (prevBase, currentCounter, currentStack) => {
    // Once all opens are used the rest must be closed
    if (currentCounter === n) {
      answer.push(prevBase + ')'.repeat(2 * n - prevBase.length));
    } else {
      // Use stack to track open/closed status, use counter to track how many opens used
      // If stack is empty, must use open next
      if (currentStack.length === 0) {
        let newBase = prevBase + '(';
        let newCounter = currentCounter + 1;
        let newStack = [...currentStack, '('];
        addNextParenthesis(newBase, newCounter, newStack);
      } else {
        // If stack is not empty, add either open or closed, then recurse for both
        let newBase = prevBase + ')';
        let newStack = [...currentStack];
        newStack.pop();
        addNextParenthesis(newBase, currentCounter, newStack);

        newBase = prevBase + '(';
        let newCounter = currentCounter + 1;
        newStack = [...currentStack, '('];
        addNextParenthesis(newBase, newCounter, newStack);
      }
    }
  };
  addNextParenthesis('', counter, stack);
  return answer;
};

generateParenthesis(3)