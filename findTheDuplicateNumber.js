/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [1,1]
Output: 1
Example 4:

Input: nums = [1,1,2]
Output: 1
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.

*/

/**
 * @param {number[]} nums
 * @return {number}
*/

var findDuplicate = function(nums) {
  // Can think of values as pointers to next index, aka LL
  // Repeated integer is start of cycle
  // Slow/Fast pointers will intersect at a point that is same distance to cycle start as index 0

  let fast = 0;
  let slow = 0;
  let slow2 = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (nums[fast] !== nums[slow]);

  while (nums[slow] !== nums[slow2]) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return nums[slow];
};