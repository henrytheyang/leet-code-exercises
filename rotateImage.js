/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // Rotation distance is determined by wall length - 1;
  // Num of rounds of rotations determined by wall length - 1
  // When # of rounds of rotations are done, decrease wall length by 2
  // End when wall length <= 0;
  let wallLength = matrix.length;
  let startingX = 0;
  let startingY = 0;
  let calcNewCoord = (someX, someY) => {
    let newX, newY;

    if (someY === startingY) {
      newX = startingX + wallLength - 1; // 
      newY = (startingY + wallLength - 1) - (newX - someX);
      // [0,0] => (0 + 3 - 1) - (2 - 0) = 0
      // [0,0] => (0 + 4 - 1) - (3 - 0) = 0
      // [1,1] => (1 + 1 - 1) - (1 - 1) = 1
      // [1,1] => (1 + 2 - 1) - (2 - 1) = 1
    } else if (someX === startingX + wallLength - 1) {
      newY = (startingY + wallLength - 1);
      newX = (startingX + wallLength - 1) - (someY - startingY);
      // [2,0] => (0 + 3 - 1) - (0 - 0) = 2
      // [2,2] => (0 + 3 - 1) - (2 - 0) = 0
    } else if (someY === startingX + wallLength - 1) {

    } else if (someX === startingX) {
      
    }

    return {
      x: newX,
      y: newY,
    }
  }

};