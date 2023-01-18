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
    // Pop all sums smaller than or equal to it
    // Push the new sum & index onto the end
  // Keep pushing sums onto monoqueue until we reach target sum
  // Once we hit the target, shift sums off the front until we're below the target
    // Instead of using shift() which is O(n), designate & track the head of the queue which is O(1)
  // Compare num of items in windows vs prev min
  let min = Infinity, currMin, sums = [];
  const recordSumAndIndex = (val, idx) => {
    // let arr = new Array;
    // arr = [val, idx];
    // return arr;
    return [val, idx];
  }

};
