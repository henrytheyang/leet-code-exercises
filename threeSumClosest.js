/*
Given an integer array nums of length n and an integer target, find three integers in nums 
such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // Have to scan all possibilities, and track closest to target
  // Sort, then iterate through nums, pinning first integer
    // Two pointer method to find other 2 integers
    // Skip if the second integer has been searched before
    // Skip once the sum moves further from target than prev 2 pointers

  let answer = Infinity;
  let prevSum = Infinity;
  let left, right;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    left = i + 1;
    right = nums.length - 1;
    if (nums[i] === nums[i - 1] && i > 0) continue; // Does nums[i - 1] need to exist

    while (left < right) {
      if (Math.abs(target - answer) > Math.abs(target - (nums[i] + nums[left] + nums[right]))) {
        answer = nums[i] + nums[left] + nums[right];
      }
      if (Math.abs(target - prevSum) < Math.abs(target - (nums[i] + nums[left] + nums[right]))) break;
      prevSum = nums[i] + nums[left] + nums[right];
      if (nums[i] + nums[left] + nums[right] > target) right--;
      else if (nums[i] + nums[left] + nums[right] < target) {
        left++;
        while (nums[left] === nums[left - 1]) left++;
      }
      else return answer;
    }
  }

  return answer;
};
threeSumClosest([1,1,1,0], -100);

/*
[1,1,1,0]
-100
Output: time limit exceeded
*/