/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // Scan contents of nums into an object
  // For... in loop the contents of object; numbers are iterated in ascending order ES6
  // Then iterate through and track longest streak
  let answer = 0;
  let currentStreak = 1;
  let obj = {};
  let ordered = [];

  if (nums.length <= 1) return nums.length;
  
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  for (props in obj) {
    ordered.push(obj[props]);
  }
  let lastNumber = ordered[0];
  for (let j = 1; j < ordered.length - 1; j++) {
    if (ordered[j] === lastNumber + 1) currentStreak++;
    else currentStreak = 1;

    lastNumber = ordered[j];
    if (currentStreak > answer) answer = currentStreak;
  }

  return answer;
};
longestConsecutive([100,4,200,1,3,2])
/*
Your input
[100,4,200,1,3,2]
Output
1
Expected
4
*/
