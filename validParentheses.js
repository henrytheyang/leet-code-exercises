// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

/**
  @param {string} s
  @return {boolean}
*/

var isValid = function(s) {
  // Use stack to store input string history, first in first out
  // If we encounter closed parens without a corresponding open parens at the top of the stack, return false
  // As we encounter open parens, we add them to the stack.
  // If we encounter a closd parens that matches the last item on the stack (an open parens), we remove the last item on the stack
  // If we get to the end of the string and the stack is empty return true
  // Else return false
  // Note- because the input string is only parens, we could do this more naively but we'll make something more robust and useful
  let validity = true;
  let parensPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let parensStack = [];
  if (s.length === 0) {
    return true;
  }
  // Scan string and push first parens onto stack (overengineering in case there are non-parens strings)
  let currentLetter = '';
  for (var i = 0; i < s.length; i++) {
    currentLetter = s[i];
    // Check for closing parens first error
    for (var key in parensPairs) {
      if (parensPairs[key] === currentLetter) {
        // validity = false;
        // break;
        return false; //TEST THIS HERE
      }
    }
    // Push first open parens onto stack
    if (parensPairs[currentLetter]) {
      parensStack.push(currentLetter);
    }
  }
  return validity;
};