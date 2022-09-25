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
  // Previous double set of two pointer solution missed too many solutions by only incrementing 
    // outside left pointer when a solution was found
  // Need to do a 3sum solution nested inside a for loop to find all solutions
  let answer = [];
  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 3; i++) {
    if (sorted[i] === sorted[i - 1]) continue;
    for (let j = i + 1; j < sorted.length - 2; j++) {
      let low = j + 1;
      let high = sorted.length - 1;
      if (sorted[j] === sorted[j - 1]) continue;
      while (low < high) {
        let sum = sorted[i] + sorted[j] + sorted[low] + sorted[high];
        if (sum === target) answer.push([sorted[i], sorted[j], sorted[low], sorted[high]]);
        if (sum <= target) {
          low++;
          while (sorted[low] === sorted[low - 1]) low++;
        } else if (sum > target) {
          high--;
          while (sorted[high] === sorted[high + 1]) high--;
        }
      }
    }
  }
  return answer;
};
fourSum([2,2,2,2,2], 8)

/*
Input:
[2,2,2,2,2]
8
Output:
[]
Expected:
[[2,2,2,2]]

*/