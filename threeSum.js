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
// var threeSum = function(nums) {
//   let answerArray = [];
//   let answerArrayTracker = {};
//   let arraySortAsc = function (inputArr) {
//     return inputArr.sort(function(a, b) {
//       return a-b;
//     })
//   }
//   let stringifyArrayElements = array => {
//     // [1, -1, 3] -> '1,-1,3'
//     return array.join();
//   }
//   for (var i = 0; i < nums.length - 2; i++) {
//     for (var j = i + 1; j < nums.length - 1; j++) {
//       for (var k = j + 1; k < nums.length; k++) {
//         let newTriplet = [];
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           newTriplet.push(nums[i], nums[j], nums[k]);
//           newTriplet = arraySortAsc(newTriplet);
//           let stringifiedArray = stringifyArrayElements(newTriplet);
//           // If array is not stored, add to the tracker and push into answerArray
//           if (answerArrayTracker[stringifiedArray] === undefined) {
//             answerArrayTracker[stringifiedArray] = true;
//             answerArray.push(newTriplet);
//           }
//         }
//       }
//     }
//   }
//   return answerArray;
// };



// [-8, -8, -4, 0, 0, 0, 1, 1, 1, 1, 3, 4, 4, 8]
var threeSum = function(nums) {
  let answerArray = [];
  let arraySortAsc = function (inputArr) {
    return inputArr.sort(function(a, b) {
      return a-b;
    })
  }
  let sortedInput = arraySortAsc(nums);
  // Iterate through sorted array
  for (var i = 0; i < sortedInput.length - 2; i++) {
    let a = i + 1;
    let z = sortedInput.length - 1;
    while (a < z) {
      if (sortedInput[i] + sortedInput[a] + sortedInput[z] === 0) {
        answerArray.push([sortedInput[i], sortedInput[a], sortedInput[z]]);
        debugger
        do {
          a = a + 1;
        } while (sortedInput[a] === sortedInput[a - 1]);
        do {
          z = z - 1;
        } while (sortedInput[z] === sortedInput[z + 1]);
      }
      if (sortedInput[i] + sortedInput[a] + sortedInput[z] < 0) {
        a = a + 1;
      }
      if (sortedInput[i] + sortedInput[a] + sortedInput[z] > 0) {
        z = z - 1;
      }
    }
    while (sortedInput[i] === sortedInput[i + 1]) {
      i = i + 1;
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
