/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // Binary search
  // Check mid- take either top or bottom depending on if it can contain the target
    // If the target is between left and right and left < right this is a valid range
    // If the left is greater than target and the right is greater than target and left > right this is a valid range;
    // Keep going until low + 1 === mid && mid + 1 === high
  let low = 0;
  let high = nums.length - 1;
  let mid;

  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    else return -1;
  }

  while (low <= high) {
    if (low === high && nums[low] !== target) return -1;
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    if (nums[low] <= target && target < nums[mid]) high = mid - 1;
    else if (nums[mid] < target && target <= nums[high]) low = mid + 1;
    else if (nums[low] > nums[mid]) high = mid - 1;
    else if (nums[mid] >= nums[high]) low = mid + 1;
    else return -1;
  }
};
search([8,9,2,3,4], 9);

/*
Input:
[8,9,2,3,4]
9
Output:
-1
Expected:
1

*/

// [8,0,1,4,5,6,7]
// [5,6,7,8,0,1,4]      target = 3 
// 0, 1, 2, 4
// 

