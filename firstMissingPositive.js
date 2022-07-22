/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  // Iterate through nums and create hash table
  let numbersPresent = {};
  for (i = 0; i < nums.length; i++) {
    numbersPresent[nums[i]] = true;
  }
  
  // Iterate through positive numbers and see if the number is present in hash table; return first missing
  let answerFound = false;
  let numberTested = 1;
  while (answerFound === false) {
    if (numbersPresent[numberTested] === true) {
      numberTested++;
    } else {
      return numberTested;
    }
  }

};