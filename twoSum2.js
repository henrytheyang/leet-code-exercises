/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such
 that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where
 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  // Speed up by storing seen numbers
  // Iterate through numbers, checking if we've seen complement already
}
var twoSumBinarySearch = function(numbers, target) {
  // Numbers is sorted- iterate through array for first number, and for each number binary search for complement
    // Continue when binary search pointers converge and dont add to target
  let high, low, mid;
  for (let i = 0; i < numbers.length; i++) {
    low = i + 1;
    high = numbers.length - 1;
    do {
      mid = Math.floor((low + high) / 2);
      if (numbers[i] + numbers[mid] === target) return [i + 1, mid + 1];
      else {
        if (numbers[i] + numbers[mid] < target) {
          low = mid + 1;
        } else if (numbers[i] + numbers[mid] > target) {
          high = mid - 1;
        }
      }
    } while (low <= high)
  }
};

twoSum([2,7,11,15], 9);
/*
input:
[2,7,11,15]
9
*/