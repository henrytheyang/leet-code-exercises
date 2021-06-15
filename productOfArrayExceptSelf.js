/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let answer = [];
  let left = [1];
  let right = [];
  right[nums.length - 1] = 1;
  // Make an array of the product of all numbers to the left of a given index
  for (i = 1; i <= nums.length - 1; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  // Make an array of the product of all numbers to the right of a given index
  for (j = nums.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] * nums[j + 1];
  }
  // Make an answer array where each index is equal to left[i] * right[i]
  for (k = 0; k < nums.length - 1; k++) {
    answer[k] = left[k] * right[k];
  }
  return answer;
};