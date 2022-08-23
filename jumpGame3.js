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
  // BFS
  // Save current index as visited
  // Add/subtract from current index
    // If new index is target index return true
    // If new index is visited, ignore
    // Else add new index to array for next round
    // If no valid indices for next round, return false;
  let answer = false;
  let targetIndices = [];
  let visitedIndices = {};
  let nextSearchTargets = [];
  if (arr[start] === 0) return true;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) targetIndices.push(i);
  }
  const bfs = (searchArr) => {
    nextSearchTargets = [];
    for (j = 0; j < searchArr.length; j++) {
      visitedIndices[searchArr[j]] = true;
      if (searchArr[j] - arr[searchArr[j]] >= 0 && searchArr[j] - arr[searchArr[j]] <= arr.length - 1) {
        if (visitedIndices[searchArr[j] - arr[searchArr[j]]] === undefined) {
          if (targetIndices.indexOf(searchArr[j] - arr[searchArr[j]]) !== -1) {
            answer = true;
            return;
          }
          nextSearchTargets.push(searchArr[j] - arr[searchArr[j]]);
        }
      }
      if (searchArr[j] + arr[searchArr[j]] >= 0 && searchArr[j] + arr[searchArr[j]] <= arr.length - 1) {
        if (visitedIndices[searchArr[j] + arr[searchArr[j]]] === undefined) {
          if (targetIndices.indexOf(searchArr[j] + arr[searchArr[j]]) !== -1) {
            answer = true;
            return;
          }
          nextSearchTargets.push(searchArr[j] + arr[searchArr[j]]);
        }
      }
    }
    if (nextSearchTargets.length === 0) return false;
    else bfs([...nextSearchTargets]);
  };
  bfs([start]);
  return answer;
};
canReach([4,2,3,0,3,1,2], 5);
/*
Input:
[4,2,3,0,3,1,2]
5
Output:
undefined
Expected:
true
*/


var canReachDFS = function(arr, start) {
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
  // Edge case- multiple indices w/ value 0

  let solved = false;
  let timesVisited = {};
  // let targetIndices = arr.indexOf(0);
  let targetIndices = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) targetIndices.push(i);
  }
  
  const dfs = (landingIndex) => {
    if (targetIndices.indexOf(landingIndex - arr[landingIndex]) !== -1 || targetIndices.indexOf(landingIndex + arr[landingIndex]) !== -1) {
      solved = true;
      return;
    }
    if (timesVisited[landingIndex] === undefined) {
      timesVisited[landingIndex] = {subtracted: false, added: false}
    }
    if (landingIndex - arr[landingIndex] >= 0 && landingIndex - arr[landingIndex] <= arr.length - 1) {
      if (timesVisited[landingIndex].subtracted === false) {
        timesVisited[landingIndex].subtracted = true;
        dfs(landingIndex - arr[landingIndex]);
      }
    }
    if (landingIndex + arr[landingIndex] >= 0 && landingIndex + arr[landingIndex] <= arr.length + 1) {
      if (timesVisited[landingIndex].added === false) {
        timesVisited[landingIndex].added = true;
        dfs(landingIndex + arr[landingIndex]);
      }
    }
  }
  dfs(start);
  return solved;
};

/* + 1 - 3 + 4
Input:
[4,4,1,3,0,3]
2
Output:
false
Expected:
true
*/