/*
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.
Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].
You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.
You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.


Example 1:
Input: mat =[
  [1,4],
  [3,2]
]
Output: [0,1]
Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.


Example 2:
Input: mat = [
  [10,20,15],
  [21,30,14],
  [7,16,32]
]
Output: [1,1]
Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.
 

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 500
1 <= mat[i][j] <= 105
No two adjacent cells are equal.
*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
  // Compare max of each column with the column max of neighbors
  // Finding peak of each column in linear time

  // Need to store row index
  const findColumnMax = (columnIndex) => {
    let columnMax = {
      value: 0,
      rowIndex: 0,
    };
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][columnIndex] > columnMax.value) {
        columnMax.value = mat[i][columnIndex];
        columnMax.rowIndex = i;
      }
    }
    return columnMax;
  }
  // Comparing peaks done in binary search
  let left = 0;
  let right = mat.length - 1;
  let mid;
  let columnMaxes = new Array(mat.length);
  let prevMax;
  let midMax;
  let nextMax;
  
  while (left < right) {
    mid = Math.floor(left + (right - left) / 2);

    if (columnMaxes[mid - 1] === undefined) {
      columnMaxes[mid - 1] = findColumnMax(mid - 1);
    } 
    prevMax = columnMaxes[mid - 1];

    if (columnMaxes[mid] === undefined) {
      columnMaxes[mid] = findColumnMax(mid);
    } 
    midMax = columnMaxes[mid];

    if (columnMaxes[mid + 1] === undefined) {
      columnMaxes[mid + 1] = findColumnMax(mid + 1);
    } 
    nextMax = columnMaxes[mid + 1];

    if (midMax.value > prevMax.value && midMax.value > nextMax.value) {
      return [midMax.rowIndex, mid];
    } else if (midMax.value < nextMax.value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return [columnMaxes[left].rowIndex, left];
};

findPeakGrid([
  [1,2,3,4,5,6,7,8],
  [2,3,4,5,6,7,8,9],
  [3,4,5,6,7,8,9,10],
  [4,5,6,7,8,9,10,11]
]);

/*
Output:
[3,3]
Expected:
[3,7]
*/