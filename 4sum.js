/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // Nested two pointer solution
  let min = 0;
  let max = nums.length - 1;
  let answer = [];
  let numsSorted = nums.sort((a, b) => a - b);
  
  while (min + 3 <= max) {
    let cycleBest = Infinity;
    let left = min + 1;
    let right = max - 1;
    
    while (left < right) {
      let sum = numsSorted[min] + numsSorted[left] + numsSorted[right] + numsSorted[max];
      if (Math.abs(target - sum) < Math.abs(target - cycleBest)) cycleBest = sum;
      if (sum === target) answer.push([numsSorted[min], numsSorted[left], numsSorted[right], numsSorted[max]]);
      if (sum <= target) left++;
      else if (sum > target) right--;
    }

    if (cycleBest <= target) min++;
    else if (cycleBest > target) max--;
  }
  return answer;
};