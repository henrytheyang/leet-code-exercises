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
  let answerArray = [];
  let answerArrayTracker = {};
  let arraySortAsc = function (inputArr) {
    return inputArr.sort(function(a, b) {
      return a-b;
    })
  }
  let stringifyArrayElements = array => {
    // [1, -1, 3] -> '1,-1,3'
    return array.join();
  }
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        let newTriplet = [];
        if (nums[i] + nums[j] + nums[k] === 0) {
          newTriplet.push(nums[i], nums[j], nums[k]);
          newTriplet = arraySortAsc(newTriplet);
          let stringifiedArray = stringifyArrayElements(newTriplet);
          // If array is not stored, add to the tracker and push into answerArray
          if (answerArrayTracker[stringifiedArray] === undefined) {
            answerArrayTracker[stringifiedArray] = true;
            answerArray.push(newTriplet);
          }
        }
      }
    }
  }
  return answerArray;
};