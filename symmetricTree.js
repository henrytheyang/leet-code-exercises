/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

                  1             1 node
                / \
                2   2           2 nodes
              / \ / \
              3  4 4  3         4 nodes
            5 6 77 77 6 5       8 nodes

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

              1
            / \
            2   2
            \   \
            3    3
            44  44
          

Follow up: Solve it both recursively and iteratively.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) {
  // Scan node's children, add children to current queue
  let valueBank = [];
  let currentQueue = [];
  let nextLevelQueue = [];
  let answer = true;
  let childrenFlag = false;

  if (root === null) {
    return true;
  }

  if (root.left === null && root.right === null) {
    return true;
  }
  currentQueue.push(root.left, root.right);

  let internalRecursiveFx = (someQueue) => {
  // Recursively, on current queue:
    // Add current queue nodes values to value bank
    // Add children to next level queue
    for (i = 0; i <= someQueue.length - 1; i++) {
      valueBank.push(someQueue[i] === null ? null : someQueue[i].val);
      nextLevelQueue.push(someQueue[i] === null ? null : someQueue[i].left, someQueue[i] === null ? null : someQueue[i].right)
      if (someQueue[i] !== null) {
        childrenFlag = true;
      }
    }

    // Check value bank for mirror status
      // If false, return false
    // [0, 1, 1, 0], [0, 1, 2, 2, 1, 0]
    //  0  1  2  3    0  1  2  3  4  5  
    let arrayMid = (valueBank.length / 2) - 1;
    for (j = 0; j <= arrayMid; j++) {
      if (valueBank[j] !== valueBank[valueBank.length - 1 - j]) {
        answer = false;
        break;
      }
    };
    if (answer === false) {
      return answer;
    }

    // If there are nodes in the next level's queue
      // Transfer next level queue to current queue
      // Blank next level queue
      // Recurse
    if (nextLevelQueue.length > 0 && childrenFlag === true) {
      currentQueue = nextLevelQueue;
      nextLevelQueue = [];
      valueBank = [];
      childrenFlag = false;
      internalRecursiveFx(currentQueue);
    }
  };

  internalRecursiveFx(currentQueue);
  console.log(`answer = ${answer}`);
  return answer;
};

let g = {val: 3, left: null, right: null};
let f = {val: 4, left: null, right: null};
let e = {val: 4, left: null, right: null};
let d = {val: 3, left: null, right: null};
let c = {val: 2, left: f, right: g}; 
let b = {val: 2, left: d, right: e}; 
let a = {val: 1, left: b, right: c};

isSymmetric(a);