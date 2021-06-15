/*
152. Maximum Product Subarray
Medium

7144

235

Add to List

Share
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Integer array, even numbers of negatives cancel out

var maxProduct = function(nums) {
  let answer = nums[0];
  let product = 1;
  let min = 1;
  let max = 1;
  let temp = 1;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      min = min * nums[i];
      max = max * max[i];
      if (min > max) {
        temp = min;
        min = max;
        max = temp;
      }
      if (answer < min) {
        answer = min;
      } else if (answer < max) {
        answer = max;
      }
    } else {
      if (answer < 0) {
        answer = 0;
      }
      min = 1;
      max = 1;
    }
  }
  return answer;
};

maxProduct([3, -1, 4]); // Output 3, Expected 4;