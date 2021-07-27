/*
Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
Example 2:

Input: matrix = [[-5]], k = 1
Output: -5
 

Constraints:

n == matrix.length
n == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
1 <= k <= n2

*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  // First and last value of matrix are low and high limits of possible values
  let low = matrix[0][0];
  let high = matrix[matrix.length - 1][matrix.length - 1];
  let middle;
  let count;
  while (low !== high) {
    // Use binary search of possible limits to pinpoint the kth term
    // Take the math.floor of the math avg of low & high for middle
    middle = Math.floor((low + high) / 2);
    count = 0;
    
    // Count how many terms are less than or equal to middle
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][matrix.length - 1] <= middle) {
        count += matrix.length;
      } else {
        for (let j = matrix.length - 1; j >= 0; j--) {
          if (matrix[i][j] <= middle) {
            count += j + 1;
            break;
          }
        }
      }
    }

    // If the count is less than k, set new low equal to middle + 1
    // If the count is too high, set the new high equal to middle
    // Keep going until low = high
    if (count < k) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  return low;
};

kthSmallest([[1,2],[1,3]],2)
/*
Output
2
Expected
1
*/