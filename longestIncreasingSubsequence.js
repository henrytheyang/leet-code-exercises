/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
  // DP Solution
  // Starting from the rear, track how long of an incrementing sequence we can make from the current index
    // For each index, it's max of (1, or 1 + any dp[index]) that is larger than the current value
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  }
  
  return dp[0];
};
lengthOfLIS([10,9,2,5,3,7,101,18]);

/*
Your input
[10,9,2,5,3,7,101,18]
Output
2
Expected
4
*/