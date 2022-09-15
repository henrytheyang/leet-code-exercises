/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  // One pass solution with hashtable
  // Index of hashtable is value of nums[i]; value of hashtable[x] = index of nums[i] 
  // Iterate through nums, current num is fixed. Add to hashtable
    // Nested loop- check if current num in nested loop has complement
    // Add to hashtable
  let answer = [];
  let duplicateTracker = [];
  let valuesPresent = {};
  let newTriplet = [];
  for (let i = 0; i < nums.length; i++) {
    valuesPresent[nums[i]] = i;
    for (let j = i + 1; j < nums.length; j++) {
      valuesPresent[nums[j]] = j;
      if (valuesPresent[0 - nums[i] - nums[j]] !== undefined) {
        newTriplet = ([nums[i], nums[j], 0 - nums[i] - nums[j]]).sort((a, b) => a - b)
        if (duplicateTracker.indexOf(JSON.stringify(newTriplet)) === -1) {
          answer.push([...newTriplet])
          duplicateTracker.push(JSON.stringify(newTriplet));
        };
      };
    }
  }
  return answer;
}

threeSum([-1,0,1,2,-1,-4])
/*
Input:
[-1,0,1,2,-1,-4]
Output:
[[-1,0,1],[-1,-1,2],[-1,-1,2],[-1,0,1],[-1,0,1],[-1,0,1],[-1,-1,2],[-4,2,2]]
Expected:
[[-1,-1,2],[-1,0,1]]
*/



var threeSumBruteForce = function(nums) {
  let answerArray = [];
  let arraySortAsc = function (inputArr) {
    return inputArr.sort(function(a, b) {
      return a-b;
    });
  };
  let sortedInput = arraySortAsc(nums);
  let incrementToNextUnique = function (someNum) {
    do {
      someNum = someNum + 1;
    } while (sortedInput[someNum] === sortedInput[someNum - 1]);
    return someNum;
  };
  let decrementToNextUnique = function (someNum) {
    do {
      someNum = someNum - 1;
    } while (sortedInput[someNum] === sortedInput[someNum + 1]);
    return someNum;
  };
  // Iterate through sorted array
  // for (var i = 0; i < sortedInput.length - 2; i++) {
  for (var i = 0; sortedInput[i] <= 0; i++) {
    let a = i + 1;
    let z = sortedInput.length - 1;
    if (i > 0 && sortedInput[i] === sortedInput[i - 1]) {
      continue;
    }
    while (a < z) {
      if (sortedInput[i] + sortedInput[a] + sortedInput[z] === 0) {
        answerArray.push([sortedInput[i], sortedInput[a], sortedInput[z]]);
        console.log('new answerArray entry = ', [sortedInput[i], sortedInput[a], sortedInput[z]]);
        console.log('i = ', i);
        console.log('a = ', a);
        console.log('z = ', z);
        // Check again to see if (a < z) so they don't collide past each other
        if (a < z) {
          a = incrementToNextUnique(a);
          z = decrementToNextUnique(z);
        }
      } else if (sortedInput[i] + sortedInput[a] + sortedInput[z] < 0) {
        a = incrementToNextUnique(a);
      } else if (sortedInput[i] + sortedInput[a] + sortedInput[z] > 0) {
        z = decrementToNextUnique(z);   
      }
    }
  }
    // Add current element to first and last element of remaining number set
      // If the sum === 0, add the resulting set of numbers into the answer set
        // Continue through checking current first number sorted array
      // If the sum < 0, advance the second number one index place
      // If the sum > 0, decrease the third number one index place
      // Keep searching through sorted array using current first number while second number < third number
    // Edge case- dealing with duplicates. Anytime we advance 1st or 2nd, or decrease 3rd, if our new number === previous number, we skip 
  return answerArray;
};
