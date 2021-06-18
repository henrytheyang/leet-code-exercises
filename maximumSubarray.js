/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  // As we iterate through the array we either keep what we already had or we start over at the new index
  let answer = nums[0];
  for (i = 1; i < nums.length; i++) {
    // Is nums[i] greater w/ all previous or without it? Greater with it keep the accumulated, otherwise start over
    nums[i] = (nums[i] + nums[i-1] > nums[i]) ? nums[i] + nums[i - 1] : nums[i];
    answer = (answer > nums[i]) ? answer : nums[i];
  }
  return answer;
};