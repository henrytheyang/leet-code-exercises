// See Minimum Size Subarray Sum
/*
Given an integer array nums and an integer k, return the length of the shortest non-empty 
subarray of nums with a sum of at least k. If there is no such subarray, return -1.

A subarray is a contiguous part of an array.

 

Example 1:
Input: nums = [1], k = 1
Output: 1

Example 2:
Input: nums = [1,2], k = 4
Output: -1

Example 3:
Input: nums = [2,-1,2], k = 3
Output: 3
 

Constraints:
1 <= nums.length <= 105
-105 <= nums[i] <= 105
1 <= k <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var shortestSubarray = function(nums, k) {
  // We can use the sliding window technique if we maintain a monotonic queue of total sum
  // We'll need to track total sum at current index, and current index
  // Monotonic queue- with each new val:
    // Check if we hit the target, shift sums off the front until we're below the target
      // Instead of using shift() which is O(n), designate & track the head of the queue which is O(1)
      // Compare num of items in windows vs prev min
    // Pop all sums smaller than or equal to it
    // Push the new sum & index onto the end
    // Keep pushing sums onto monoqueue until we reach target sum
  let sums = [], head = 0, right = 0, min = Infinity, currSum, winLength;
  for (let right = 0; right < nums.length; right++) {
    currSum = sums.length > 0 ? sums[sums.length - 1][0] + nums[right] : nums[right];
    if (currSum >= k) {
      min = Math.min(min, right + 1);
    }
    while (sums.length > 0 && k <= currSum - sums[head][0]) { // Found valid window
      if (head < sums.length) winLength = right - sums[head][1];
      else winLength = 1;
      head++; // Shift forward
      min = Math.min(min, winLength);
      if (head === sums.length) {
        head = 0;
        sums = [];
        break;
      }
    }
    while (sums.length > 0 && currSum <= sums[sums.length - 1][0]) {
      sums.pop();
      if (sums.length === head) {
        head = 0;
        sums = [];
        break;
      }
    }
    sums.push([currSum, right]);
  }
  return min === Infinity ? -1 : min;
};
shortestSubarray(big, 2983495);

/*
nums =
[77,19,35,10,-14]
k =
19
*/