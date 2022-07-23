/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  // Solution must be in the range 1...n + 1, where n is the length of the array
  // Iterate through array and overwrite irrelevant numbers (negatives, numbers > n + 1)
  // Iterate through array- take the value at each index, go to that index number, and mark it by making it negative

  // Iterate through array- return first positive number, else return n + 1

};