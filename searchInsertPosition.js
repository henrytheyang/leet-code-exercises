/*
Given a sorted array of distinct integers and a target value, return the index if the 
target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // Binary search
  // Searching for an index where the value is equal or greater than the search value, and the previous index
  // is lesser than the search value
  let answer, low, high = [undefined, 0, nums.length - 1];
  if (nums[nums.length - 1] < target) return nums.length;
  else if (nums[0] > target) return 0;
  
  while (low <= high) {
    answer = Math.floor((low + high) / 2);
    if (nums[answer] === target) return answer;
    else if (answer - 1>= 0 && nums[answer - 1] < target && nums[answer] > target) return answer;
    else {
      if (nums[answer] > target) {
        high = answer - 1;
      } else {
        low = answer + 1;
      }
    }
  }
};