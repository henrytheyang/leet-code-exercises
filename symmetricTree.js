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
  // Recursively, on current queue:
    // Add current queue nodes values to value bank
    // Add children to next level queue
    // Check value bank for mirror status
      // If false, return false
    // If there are nodes in the next level's queue
      // Transfer next level queue to current queue
      // Blank next level queue
      // Recurse


  return true;
};