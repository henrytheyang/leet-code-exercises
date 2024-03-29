/*
Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
Example 2:

Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.
Example 3:

Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
 

Constraints:

1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  // Map out values for constant time lookup
  let solved = false;
  let counter = 0;
  let currentSearchIndices = [0];
  let nextSearchIndices = [];
  if (arr.length === 1) return counter;
  let valueMap = {};
  for (i = 0; i < arr.length; i++) {
    if (valueMap[arr[i]] === undefined) valueMap[arr[i]] = [i];
    else valueMap[arr[i]].push(i);
  }
  
  do {
  // Loop until we reach the last index:
    // Increment jump counter
    counter++;
    // Create queue of next search: index - 1, index + 1, and other indices with matching values
    nextSearchIndices = [];
    for (let j = 0; j < currentSearchIndices.length; j++) {
      if (arr[currentSearchIndices[j]] === arr[arr.length - 1]) { // Jump to any index with same value
        solved = true;
        break;
      } else {
        if (valueMap[arr[currentSearchIndices[j]]]) { // If the indices for this value still exist, push them in
          for (let k = 0; k < valueMap[arr[currentSearchIndices[j]]].length; k++) {
            if (valueMap[arr[currentSearchIndices[j]]][k] === currentSearchIndices[j]) {
              continue;
            } else {
              nextSearchIndices.push(valueMap[arr[currentSearchIndices[j]]][k]);
            }
          }
        }
      }
      if (currentSearchIndices[j] - 1 >= 0 && valueMap[arr[currentSearchIndices[j] - 1]]) {
        if (arr[currentSearchIndices[j] - 1] !== arr[currentSearchIndices[j]]) nextSearchIndices.push(currentSearchIndices[j] - 1);
      }
      if (currentSearchIndices[j] + 1 === arr.length - 1) {
        solved = true;
        break;
      } else {
        if (valueMap[arr[currentSearchIndices[j] + 1]] && arr[currentSearchIndices[j] + 1] !== arr[currentSearchIndices[j]]) {
          nextSearchIndices.push(currentSearchIndices[j] + 1);
        }
      }
    // Remove value from map
    delete valueMap[arr[currentSearchIndices[j]]];
  }
  if (solved === true) return counter;
    currentSearchIndices = nextSearchIndices;
  } while (nextSearchIndices.length > 0);
};

minJumps([11,22,7,7,7,7,7,7,7,22,13]);
/*
Input
[11,22,7,7,7,7,7,7,7,22,13]
Output
5
Expected
3
*/
