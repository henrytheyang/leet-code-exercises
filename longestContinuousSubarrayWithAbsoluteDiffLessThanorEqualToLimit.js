/*
Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray 
such that the absolute difference between any two elements of this subarray is less than or equal to limit.

Example 1:
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
Example 2:

Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
Example 3:

Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= limit <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  // Need to track first position of streak, largest, and smallest indices
  // Also need to track new largest and smallest indices as things exit the window
  // Track the size of streak, return the largest streak
  // Track start/end of streak w/ 2 pointers
  // Add new value to queues
  // If the value is within the limit, increment right pointer
  // If the new value is outside the limit, kick the inc queue until we get to an appropriate min value
    // Increment start until we reach the appropriate min value index
  // Use inc monotonic queue to track min
    // New value- kick all values in queue bigger
  // Use dec monotonic queue to track max
    // New value- kick all values in queue smaller
  // Optimization to avoid array.shift()
    // Instead of shifting, use a pointer to point at the valid starting point of each queue
  let incr = []; // Track index of values
  let decr = []; // Track index of values
  let left = 0;
  let right = 0;
  let bestStreak = 0;
  let streak = 0;
  let minIndex = 0;
  let maxIndex = 0;

  while (right < nums.length) {
    while (incr.length > 0 && nums[incr[incr.length - 1]] > nums[right]) {
      if (minIndex === incr.length - 1) {
        incr = [];
        minIndex = 0
      } else incr.pop();
    }
    incr.push(right);
    while (decr.length > 0 && nums[decr[decr.length - 1]] < nums[right]) {
      if (maxIndex === decr.length - 1) {
        decr = [];
        maxIndex = 0
      } else decr.pop();
    }
    decr.push(right);
    
    if (limit >= nums[decr[maxIndex]] - nums[incr[minIndex]]) {
      streak = right - left + 1;
      if (streak > bestStreak) bestStreak = streak;
    } else {
      while (limit < nums[decr[maxIndex]] - nums[incr[minIndex]]) {
        left++;
        if (decr[maxIndex] < left) maxIndex++;
        if (incr[minIndex] < left) minIndex++;
      }
    }
    right++;
  }
  return bestStreak;
};
longestSubarray([8,2,4,7],4)

/*
Input
nums =
[8,2,4,7]
limit =
4
Output
1
Expected
2
*/