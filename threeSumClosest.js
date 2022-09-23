/*
Given an integer array nums of length n and an integer target, find three integers in nums 
such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // Have to scan all possibilities, and track closest to target
  // Sort, then iterate through nums, pinning first integer
    // Two pointer method to find other 2 integers
    // Skip if the second integer has been searched before
    // Skip once the sum moves further from target than prev 2 pointers

  let answer = Infinity;
  let prevSum = Infinity;
  let left, right;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    prevSum = Infinity;
    left = i + 1;
    right = nums.length - 1;
    if (nums[i] === nums[i - 1] && i > 0) continue; // Does nums[i - 1] need to exist

    while (left < right) {
      if (Math.abs(target - answer) > Math.abs(target - (nums[i] + nums[left] + nums[right]))) {
        answer = nums[i] + nums[left] + nums[right];
      }
      if (Math.abs(target - prevSum) < Math.abs(target - (nums[i] + nums[left] + nums[right]))) break;
      prevSum = nums[i] + nums[left] + nums[right];
      if (nums[i] + nums[left] + nums[right] > target) right--;
      else if (nums[i] + nums[left] + nums[right] < target) {
        left++;
        while (nums[left] === nums[left - 1]) left++;
      }
      else return answer;
    }
    if (answer === target) return answer;
  }

  return answer;
};
threeSumClosest(
  [-23,-67,32,21,-65,46,73,42,93,9,-61,-79,-51,61,-15,49,92,-34,50,1,26,-12,68,-97,-17,51,-55,75,-56,-95,-70,-42,91,-18,-64,20,33,-20,19,61,-89,81,-73,82,-23,-65,51,-88,15,-48,24,34,0,-24,37,22,28,-67,-25,-61,-57,-74,65,50,-66,24,99,80,44,85,20,-4,-9,-81,87,-82,-100,51,-83,9,-31,37,23,-61,53,-14,-51,88,56,27,42,-52,-97,37,36,-59,-45,95,46,-1,-100,-38,66,44,27,-97,12,-43,84,-53,93,18,-40,-38,34,85,53,-50,-14,-6,98,-77,-17,50,-65,52,-46,-94,49,72,-2,-82,45,-39,-58,67,82,63,95,-32,47,15,-20,46,5,17,-40,-95,97,-9,11,8,-51,-24,-50,-37,-72,-57,26,26,19,71,-42],
  -87
);

/*
Input:
[-23,-67,32,21,-65,46,73,42,93,9,-61,-79,-51,61,-15,49,92,-34,50,1,26,-12,68,-97,-17,51,-55,75,-56,-95,-70,-42,91,-18,-64,20,33,-20,19,61,-89,81,-73,82,-23,-65,51,-88,15,-48,24,34,0,-24,37,22,28,-67,-25,-61,-57,-74,65,50,-66,24,99,80,44,85,20,-4,-9,-81,87,-82,-100,51,-83,9,-31,37,23,-61,53,-14,-51,88,56,27,42,-52,-97,37,36,-59,-45,95,46,-1,-100,-38,66,44,27,-97,12,-43,84,-53,93,18,-40,-38,34,85,53,-50,-14,-6,98,-77,-17,50,-65,52,-46,-94,49,72,-2,-82,45,-39,-58,67,82,63,95,-32,47,15,-20,46,5,17,-40,-95,97,-9,11,8,-51,-24,-50,-37,-72,-57,26,26,19,71,-42]
-87
Output:
-89
Expected:
-87

*/