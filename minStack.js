/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = new Stack();
  this.minStack = new Stack();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (val <= this.minStack.top() || this.minStack.top() === undefined) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.top() === this.minStack.top()) {
    this.minStack.pop();
    console.log(`popped here`)
  }
  console.log(`am i here`)
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.top();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  console.log(this.minStack.top());
  return this.minStack.top();
};

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  push(val) {
    this.storage[this.size] = val;
    this.size++;
    console.log(`this.storage = ${JSON.stringify(this.storage)} and this.size = ${this.size}`)
  }
  pop() {
    this.size--;
    delete this.storage[this.size + 1];
    return this.storage[this.size + 1];
  }
  top() {
    return this.storage[this.size - 1];
  }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let testStack = new MinStack();
testStack.push(0);
testStack.push(1);
testStack.push(0);
testStack.getMin();
testStack.pop();
testStack.getMin();