/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // Dp solution- track max sum at each index point. Sum starting from rear 3
  // Most indices sum is max of- nums[i] + dp[i + 2], nums[i] + dp[i + 3], dp[i + 1]
  // Special case for last 3, first
  // Compare answers for 2 subarrays- one missing the first index, the next missing the last index
  const helper = (start, end) => {
    let dp = new Array(end - start + 1);
    dp[end] = nums[end];
    if (nums.length >= 2) dp[end - 1] = Math.max(nums[end - 1], nums[end]);
    if (nums.length >= 3) dp[end - 2] = Math.max(nums[end - 2] + dp[end], dp[end - 1]);
    for (let i = end - 4; i >= 0; i--) {
      dp[i] = Math.max(nums[i] + dp[i + 2], nums[i] + dp[i + 3], dp[i + 1]);
    }
    return dp[0];
  }

  let first = rob(0, nums.length - 2);
  let second = rob(1, nums.length - 1);
  return Math.max(first, second);
};
rob([2,3,2]);

/*
Input: nums = [2,3,2]
Output: 4
*/