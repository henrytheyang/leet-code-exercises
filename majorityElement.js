/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may 
assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementLinearTime = function(nums) {
  // Linear time, linear space solution-
  // Keep count of max, keep track of each value as you iterate through array
  // Return max when max greater than n/2 or when we reach the end
  let count = 0;
  let maxElement;
  let memoryBank = {};
  for (let i = 0; i < nums.length; i++) {
    if (memoryBank[nums[i]] === undefined) memoryBank[nums[i]] = 1;
    else memoryBank[nums[i]] = memoryBank[nums[i]] + 1;
    if (memoryBank[nums[i]] > count) {
      count = memoryBank[nums[i]]
      maxElement = nums[i];
    };
    if (count > (nums.length) / 2) return maxElement;
  }
};

var majorityElementConstantSpace = function(nums) {
  // Constant space solution-
  // Sort original input array
  // If nums.length is even, return middle element
  // If nums.length is odd, check middle 3 elements, return the one that shows up at least twice
  nums.sort((a, b) => a - b);
  return nums[Math.floor((nums.length - 1) / 2)];
}