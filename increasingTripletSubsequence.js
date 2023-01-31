/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that 
i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // Monotonic queue solution, where the monoqueue is only 1 long
  // Track 2 variables- small, big
  // As soon as we encounter a number bigger than both, return true
  // Overwrite small when we encounter a value smaller than both
  // Overwrite big when we find a value bigger than small, smaller than big
  if (nums.length < 3) return false;
  let small = nums[0], big = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > small && nums[i] > big) return true;
    if (nums[i] < small) small = nums[i];
    else if (nums[i] > small && nums[i] < big) big = nums[i];
  }
  return false;
};

var increasingTripletNestedloop = function(nums) {
  // Greedy solution from rear, O(n^2) solution
  // Start from rear, nested loops to check 
  if (nums.length < 3) return false;
  let dp = new Array(nums.length).fill(1);
  let streak = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    streak = 1;
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] < nums[j]) {
        streak = Math.max(streak, dp[j] + 1);
        if (streak === 3) return true;
      }
    }
    dp[i] = streak;
  }
  return false;
};

increasingTriplet([6,7,1,2]);
/*
Input
nums =
[6,7,1,2]
70 / 77 testcases passed
Output
true
Expected
false
*/