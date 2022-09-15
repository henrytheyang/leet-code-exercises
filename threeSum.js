// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  // One pass solution with hashtable
  // Iterate through nums, current num is fixed. Add to hashtable
    // Nested loop- check if current num in nested loop has complement
    // Add to hashtable
}

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

threeSum([-8, -4, -8, 0, 0, 8, 1, 1, 1, 1, 3, 4, 4, 0]);