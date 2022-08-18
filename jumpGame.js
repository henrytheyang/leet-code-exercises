/*
You are given an integer array nums. You are initially positioned at the array's first index,
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0,
which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // Starting at first index, mark all valid landing spots
  // Visit each valid landing spot in turn, marking all valid landing spots
  // If we reach the last element in array and it's valid return true, else false
  if (nums.length === 1) return true;
  let validLandingSpots = new Array(nums.length).fill(false);
  validLandingSpots[0] = true;
  for (let i = 0; i < validLandingSpots.length; i++) {
    if (validLandingSpots[i]) {
      for (let j = 0; j <= nums[i]; j++) {
        validLandingSpots[i + j] = true;
        if (validLandingSpots[validLandingSpots.length - 1] === true) {
          return true;
        }
      }
    }
  }
  return false;
};