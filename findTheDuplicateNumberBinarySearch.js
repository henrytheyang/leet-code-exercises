/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [1,1]
Output: 1
Example 4:

Input: nums = [1,1,2]
Output: 1
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.

*/

/**
 * @param {number[]} nums
 * @return {number}
*/

var findDuplicate = function(nums) {
  // Duplicated number must be inside the range of index values.
  // Binary search method- compare array values against the middle of possible values
    // Middle value = (low + high) / 2
    // Initialize low = 1, high = length - 1

    // Iterate through array
      // Count the number of values in array <= middle value; if count <= middle value, middle value must be greater than duplicated value
        // Reset low = middle value
        // Else high = middle value;

  }
    // Return low when low = high;
};

[4, 2, 2, 4, 4]
/*
l = 1, h = 4, m = 2.5, count = 2
l = 3, h = 4, m = 3.5, count = 2
l = 4, h = 4
*/

[3,1,3,4,2]
/*
l = 1, h = 4, m = 2.5, count = 2
l = 3, h = 4, m = 3.5, count = 4
l = 3, h = 3;
*/