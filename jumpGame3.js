/*
Given an array of non-negative integers arr, you are initially positioned at start index of the array.
When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 
Example 2:

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3
Example 3:

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.
 

Constraints:

1 <= arr.length <= 5 * 104
0 <= arr[i] < arr.length
0 <= start < arr.length
*/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  // Recursive BFS
  // Find target
  // Starting at 1st index, every choice is add or subtract.
    // Can't go outside array bounds
    // Add or subtract current val to current index
    // Save valid landing spots
      // If first time visting, note; if second time visiting note and dont recurse
      // If they equal target return true
    // Else recurse
  // If we run out of valid recursing targets, return false
  let solved = false;
  let timesVisited = {};
  let targetIndex = arr.indexOf(0);
  
  const bfs = (landingIndex) => {
    if (landingIndex - arr[landingIndex] === targetIndex || landingIndex + arr[landingIndex] === targetIndex) {
      solved = true;
      return;
    }
    timesVisited[landingIndex] = (timesVisited[landingIndex] === undefined) ? 1 : 2;
    if (landingIndex - arr[landingIndex] >= 0 && landingIndex - arr[landingIndex] <= arr.length - 1) {
      if (timesVisited[landingIndex] === 1) bfs(landingIndex - arr[landingIndex])
    }
    if (landingIndex + arr[landingIndex] >= 0 && landingIndex + arr[landingIndex] <= arr.length + 1) {
      if (timesVisited[landingIndex] === 1) bfs(landingIndex + arr[landingIndex])
    }
  }
  bfs(start);
  return solved;
};