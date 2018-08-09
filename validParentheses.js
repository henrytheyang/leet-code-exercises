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
  // If we encounter a closed parens that matches the last item on the stack (an open parens), we remove the last item on the stack
  // As we encounter open parens, we add them to the stack.
  // If we get to the end of the string and the stack is empty return true
  // Else return false
  // Note- because the input string is only parens, we could do this more naively but we'll make something more robust and useful
  let validity = true;
  let parensPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let closingParens = {
    ')': true,
    ']': true,
    '}': true,
  };
  let parensStack = [];
  if (s.length === 0) {
    return true;
  }
  // Scan string and push first parens onto stack (overengineering in case there are non-parens strings)
  let currentLetter = '';
  for (var i = 0; i < s.length; i++) {
    currentLetter = s[i];
    // If currentLetter is a closing parens and it doesn't match the top of the stack string is invalid
    if (closingParens[currentLetter] === true && parensPairs[parensStack[parensStack.length - 1]] !== currentLetter) {
      validity = false;
      // console.log('false catcher catching yay');
      break;
    }
    // If currentLetter is a closing parens and it DOES match the top of the stack, destack parensStack
    if (parensPairs[parensStack[parensStack.length - 1]] === currentLetter) {
      parensStack.pop();
      // console.log('destacked parensStack');
    }
    // Push first open parens onto stack
    if (parensPairs[currentLetter]) {
      parensStack.push(currentLetter);
      // console.log('pushed an open parens onto stack');
    }
  }
  // After iterating through string check for leftover unmatched parens
  if (parensStack.length > 0) {
    validity = false;
  }
  console.log('s = ', s, ' validity = ', validity);
  // console.log('parensStack = ', parensStack);
  return validity;
};

isValid('()');
isValid('()[]{}');
isValid('(]');
isValid('([)]');
isValid('{[]}');
isValid('a()(');