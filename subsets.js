/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


Example 2:
Input: nums = [0]
Output: [[],[0]]
 

Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // Recursive
  // Take previous input, add all possible numbers one at a time, starting after index of last element
  // Add to answer
  // If created length is less than nums.length, recurse on all subsets
  let answer = [[]];
  if (nums.length === 0) {
    return answer;
  }
  const createNewSubset = (prevArr, startingIndex) => {
    for (let i = startingIndex; i < nums.length; i++) {
      let newArr = [...prevArr];
      newArr.push(nums[i]);
      answer.push(newArr);
      if (newArr.length < nums.length) {
        createNewSubset(newArr, i + 1);
      }
    }
  };
  createNewSubset([], 0);
  return answer;
};