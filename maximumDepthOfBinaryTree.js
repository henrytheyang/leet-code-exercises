/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  return {
    val : (val===undefined ? 0 : val),
    left : (left===undefined ? null : left),
    right : (right===undefined ? null : right),
  }
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let answer = 0;
  let childrenQueue = [];
  let nextQueue = [];
  // Breadth-first search.
  // Scan current node for all children, add children to queue.
  // Increment counter
  // Recurse on queue
  let internalRecursiveFx = (someQueue) => {
    answer++;
    for (i = 0; i <= someQueue.length - 1; i++) {
      if (someQueue[i] !== null & someQueue[i].left !== null) {
        nextQueue.push(someQueue[i].left);
      }
      if (someQueue[i] !== null & someQueue[i].right !== null) {
        nextQueue.push(someQueue[i].right);
      }
    }
    childrenQueue = nextQueue;
    nextQueue = [];
    if (childrenQueue.length > 0) {
      internalRecursiveFx(childrenQueue);
    }
  }

  if (root !== null) {
    answer++;
  } else {
    return 0;
  }
  // Scan root node for children, add to queue. Recurse on queue
  if (root !== null) {
    if (root.left !== null) {
      childrenQueue.push(root.left);
    }
    if (root.right !== null) {
      childrenQueue.push(root.right);
  }
  }
  if (childrenQueue.length > 0) {
    internalRecursiveFx(childrenQueue);
  }
  console.log(`answer = ${answer}`);
  return answer;
};

let a = TreeNode(7, null, null);
let b = TreeNode(15, null, null);
let c = TreeNode(20, b, a);
let d = TreeNode(9, null, null);
let e = TreeNode(3, d, c);

maxDepth(e);