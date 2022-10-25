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

longestConsecutive([9,1,-3,2,4,8,3,-1,6,-2,-4,7])
/*
Input
[9,1,-3,2,4,8,3,-1,6,-2,-4,7]
Output
2
Expected
3
*/
