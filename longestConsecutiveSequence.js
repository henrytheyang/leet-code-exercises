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
  // Iterate along array
    // Check if each number is the start of a sequence by checking if the value one smaller is present
      // If present continue
      // If no and it's start of sequence start counting out how many consecutive integers you can reach
  let answer;
  if (nums.length > 0) answer = 1;
  let stored = {};
  let streak;
  let currentNum;
  let foundLeftEdge = false;
  let foundRightEdge = false;
  
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    stored[nums[i]] = nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    streak = 1;
    if (stored[nums[j]] === 'used') continue;
    currentNum = nums[j];
    stored[currentNum] = 'used';

    while (foundLeftEdge === false) {
      if (stored[currentNum - 1] === currentNum - 1) {
        stored[currentNum - 1] = 'used';
        streak++;
        currentNum--;
      } else {
        foundLeftEdge = true;
      }
    }
    currentNum = nums[j];
    while (foundRightEdge === false) {
      if (stored[currentNum + 1] === currentNum + 1) {
         stored[currentNum + 1] = 'used';
         streak++;
         currentNum++;
      } else {
        foundRightEdge = true;
      }
    }
    
    if (streak > answer) answer = streak;
    foundLeftEdge = false;
    foundRightEdge = false;
  }
  return answer;
}
longestConsecutive([100,4,200,1,3,2]);
/*
Your input
[100,4,200,1,3,2]
Output
undefined
Expected
4
*/
