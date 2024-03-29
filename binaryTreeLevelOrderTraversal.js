/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let answerBank = [];
  let helperRecursive = (someNode, currentLevel) => {
    if (someNode !== null) {
      if (answerBank[currentLevel] === undefined) {
        answerBank[currentLevel] = [someNode.val];
      } else {
        answerBank[currentLevel].push(someNode.val);
      }
    }
    if (someNode.left !== null) {
      helperRecursive(someNode.left, currentLevel + 1);
    }    
    if (someNode.right !== null) {
      helperRecursive(someNode.right, currentLevel + 1);
    }
  }
  if (root === null) {
    return answerBank;
  }
  helperRecursive(root, 0);
  return answerBank;
};

/*
[3,9,20,null,null,15,7]
                3
          9         20
      null null   15  7
*/