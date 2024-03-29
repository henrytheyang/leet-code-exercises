/*
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses 
in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

 

Example 1:


Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:


Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 104
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
 * @return {number}
 */
var rob = function(root) {
  // DFS solution-
  // Each node has values based off of decision- useRoot/dontUse root
    // Use root value: root value + dontUse of left + dontUse of right
    // dontUse value: max of left child + max of right child
  // Null roots return [0,0] for use/dontUse values
  // Use recursive function that takes a root, returns [use, dontUse] values, and recurses to children

  const determineValue = (someNode) => {
    let values = {};

    if (!someNode) return {use: 0, dontUse: 0}; // Null branches

    let leftValues = determineValue(someNode.left)
    let rightValues = determineValue(someNode.right);

    values.use = someNode.val + leftValues.dontUse + rightValues.dontUse;
    values.dontUse = Math.max(leftValues.dontUse, leftValues.use) + Math.max(rightValues.dontUse, rightValues.use);

    return values;
  }

  let rootValues = determineValue(root);

  return Math.max(rootValues.use, rootValues.dontUse);
};