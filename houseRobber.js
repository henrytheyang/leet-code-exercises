/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can 
rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // Dp solution
  // Track best possible running sum for each index, from the rear
    // Select the best sum from nums[i], nums[i] + nums[i + 2], nums[i] + nums[i + 3];
  let dp = new Array(nums.length);

  dp[nums.length - 1] = nums[nums.length - 1];
  if (nums.length >= 2) dp[nums.length - 2] = Math.max(nums[nums.length - 2], dp[nums.length - 1]);
  if (nums.length >= 3) dp[nums.length - 3] = Math.max(nums[nums.length - 3] + dp[nums.length - 1], dp[nums.length - 2]);

  for (let i = nums.length - 4; i >= 0; i--) {
    dp[i] = Math.max(nums[i] + dp[i + 2], nums[i] + dp[i + 3], dp[i + 1]);
  }

  return dp[0];
};

rob([1,2,1,1])
/*
Input
[1,2,1,1]
Output
2
Expected
3
*/