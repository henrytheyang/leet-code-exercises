/*
Given an array of positive integers nums and a positive integer target, return the 
minimal length of a subarray whose sum is greater than or equal to target. If there
is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution 
of which the time complexity is O(n log(n)).
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // Because we only have pos numbers, the total as we iterate and sum will only increase
  // Thus we can use a two pointer method to determine min window
  // L & R start at index 0
    // Iterate R until we hit or exceed target size
    // Iterate L until we dip below target size
    // Evaluate successful window size, compare to min so far
    // Continue to iterate R until R goes out of bounds
};