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
  let min = Infinity, currSum, winLength, sums = [[nums[0], 0]], head = 0, right = 0;
  const recordSumAndIndex = (val, idx) => {
    // let arr = new Array;
    // arr = [val, idx];
    // return arr;
    return [val, idx];
  }
  
  while (right < nums.length) {
    while (sums[sums.length - 1][0] < k) { // Haven't reached k yet
      right++;
      if (right === nums.length) { // Base condition, right beyond bound, return answer
        if (min === Infinity) return -1;
        else return min;
      }
      currSum = sums[sums.length - 1][0] + nums[right];
      while (currSum < sums[sums.length - 1][0]) { // Pop everything bigger than currSum to maintain monoqueue
        sums.pop();
        if (sums.length - 1 < head) { // Popped below head, reset sums
          head = 0;
          sums = [];
          break;
        } 
      }
      // sums.push(recordSumAndIndex(currSum, right));
      sums.push([currSum, right]);
    }
    while (sums[sums.length - 1][0] >= k) { // Reached k, narrow window
      head++;
      currSum = sums[sums.length - 1][0] - sums[head][0];
      sums[sums.length - 1][0] = currSum;
      if (currSum < k) { // Found a boundary of a window
        winLength = right - head + 2;
        min = Math.min(min, winLength);
      }
      if (head > right) {
        head = 0;
        sums = [];
      }
    }
  }
};
shortestSubarray([2,-1,2], 3);