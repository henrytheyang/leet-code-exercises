/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//   // Run loop through nums.
//   // Copy previous array, adding current number to the end of the array
//   // Delete used number
//   // Recurse until array length === nums length
//   // Push arrays onto answer array
//   let answer = [];
//   let possibleNums = {};
//   nums.forEach(integer => possibleNums[integer] = integer);

//   const addNewNumber = (prevArr, unusedNums) => {
//     for (var num in unusedNums) {
//       let newArr = [...prevArr];
//       newArr.push(unusedNums[num]);
//       if (newArr.length === nums.length) {
//         answer.push(newArr);
//       } else {
//         let newUnused = {...unusedNums};
//         delete newUnused[num];
//         addNewNumber(newArr, newUnused);
//       }
//     }
//   };

//   addNewNumber([], possibleNums);
//   return answer;
// };

var permute = function(nums) {
  // Run loop through nums.
  // Copy previous array, adding current number to the end of the array
  // Mark used number
  // Recurse until array length === nums length
  // Push arrays onto answer array
  let answer = [];
  let usedStatus = Array(nums.length).fill(false, 0);
  const addNewNumber = (prevArr, usedList) => {
    for (var i = 0; i < nums.length; i++) {
      if (usedList[i] === true) {
        continue;
      } else {
        prevArr.push(nums[i]);
        usedList[i] = true;
        // Base case
        if (prevArr.length === nums.length) {
          answer.push([...prevArr]);
        } else {
          addNewNumber(prevArr, usedList);
        }
        // Backtrack, undo, prep for next iteration
        prevArr.pop();
        usedList[i] = false;
      }
    }
  };
  addNewNumber([], usedStatus);
  return answer;
};



console.log(permute([1,2,3]));
