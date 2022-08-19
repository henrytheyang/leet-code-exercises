/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // Starting at index 1, increment & record min number of jumps to valid landing spots
  // If valid landing spots are undefined, add current jump tally + 1 to spot
  // If valid landing spot has a value, take the min between value & jump tally + 1
  // Record each number of jumps to reach last index; keep min number
  let answer = nums.length - 1;
  let numJumpsToIndex = new Array(nums.length - 1);
  numJumpsToIndex[0] = 0;
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) continue;
    for (j = 0; j <= nums[i]; j++) {
      if (numJumpsToIndex[i + j] === undefined) {
        numJumpsToIndex[i + j] = numJumpsToIndex[i] + 1;
      } else {
        numJumpsToIndex[i + j] = Math.min(numJumpsToIndex[i + j], numJumpsToIndex[i] + 1);
      }
      if (i + j === nums.length - 1) {
        answer = Math.min(answer, numJumpsToIndex[nums.length - 1]);
      }
    }
  }
  return answer;
};
// Time complexity: O(n * m), where m is avg nums[i]
// Space complexity: O(n)