/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 

Follow up: Could you solve the problem in linear time and in O(1) space?

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
  // Can be 2 at most
  // Any time a count is 0, assign new element
  // Track 2 elements at a time, with 2 counts
  // Increment count when matching
  // Any time a new value does not match either element, decrement both
  // At the end of first loop will have 2 most common elements
  // Run second loop to count to see if they're above n/3
  let a, b, countA, countB;
  [countA, countB] = [0, 0];
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === a) {
      countA++;
    } else if (nums[i] === b) {
      countB++;
    } else if (countA < 1) {
      a = nums[i];
      countA = 1;
    } else if (countB < 1) {
      b = nums[i];
      countB = 1;
    } else {
      countA--;
      countB--;
    }
  }

  countA = 0;
  countB = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === a) countA++;
    if (nums[j] === b) countB++;
  }

  if (countA > (nums.length / 3)) answer.push(countA);
  if (countB > (nums.length / 3)) answer.push(countA);

  return answer;
};

/*
Input
nums =
[3,2,3]
Output
[2]
Expected
[3]
*/