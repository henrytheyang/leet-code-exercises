/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // We effectively have a strictly non-decreasing series of numbers
  // We can use a binary search algorithm if we can
  // Convert m,n to index number, and back
  if (matrix.length === 1 && matrix[0].length === 1) {
    if (matrix[0][0] === target) return true;
    else return false;
  }
  const calcCoord = (index) => {
    let arrLength = matrix[0].length;
    let counter = 0;
    while (index > arrLength) {
      index -= arrLength;
      counter++;
    }
    return {m: counter, n: index - 1};
  }
  let low = 1;
  let high = (matrix.length) * (matrix[0].length);
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    let coord = calcCoord(mid);
    if (matrix[coord.m][coord.n] === target) return true;
    else if (matrix[coord.m][coord.n] < target) low = mid + 1;
    else high = mid - 1;
  }

  return false;
};
searchMatrix([[1],[3]], 3);

/*
Input
matrix =
[[1],[3]]
target =
3
115 / 133 testcases passed
Output
false
Expected
true
*/