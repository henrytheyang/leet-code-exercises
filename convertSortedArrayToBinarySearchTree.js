/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
  // Find center of array in O(1) time
  let findCenterIndex = (someArr) => {
    return Math.floor(someArr.length / 2);
  }
  // Set the center as the treeRoot node
  let treeRoot =  new TreeNode(nums[findCenterIndex(nums)]);
  let treeMaker = (someParent, someArr) => {
    // Find the center of the 2 halves left over
    // Set the center of left half as the treeRoot.left, center of right half as treeRoot.right
    let leftArr = someArr.slice(0, findCenterIndex(someArr) );
    let rightArr = someArr.slice(findCenterIndex(someArr) + 1, (someArr.length) );
    if (leftArr.length > 0) {
      someParent['left'] = new TreeNode(leftArr[findCenterIndex(leftArr)]);
      // Recurse
      treeMaker(someParent['left'], leftArr);
    }
    if (rightArr.length > 0) {
      someParent['right'] = new TreeNode(rightArr[findCenterIndex(rightArr)]);
      // Recurse
      treeMaker(someParent['right'], rightArr);
    }
  }

  treeMaker(treeRoot, nums);
  return treeRoot;
};


sortedArrayToBST([-10,-3,0,5,9],);