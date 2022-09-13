/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Iterate through nums, create hash table where the value in nums = index of hashtable; hashtable value = index nums
  // Then iterate through nums again; look at corresponding index in hashtable; if undefined, move on
  let hashTable = new Array(nums.length);
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    if (hashTable[target - nums[j]] === undefined) continue;
    else {
      // answer = [...nums[j], target - nums[j]]
      answer.push(nums[j], target - nums[j])
      break;
    };
  }
  return answer;
};
twoSum([2,7,11,15], 9);

/*
[2,7,11,15]
9
*/