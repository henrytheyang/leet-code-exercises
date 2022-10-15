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
  let firstSquareX = 0;
  let firstSquareY = 0;
  let counter = 1;
  let calcNewCoord = (someX, someY) => {
    let newX, newY;
    if (someY === firstSquareY) {
      newX = firstSquareX + wallLength - 1; // 
      newY = someX
    } else if (someX === firstSquareX + wallLength - 1) {
      newY = (firstSquareY + wallLength - 1);
      newX = (firstSquareX + wallLength - 1) - (someY) + firstSquareY;
    } else if (someY === firstSquareY + wallLength - 1) {
      newX = firstSquareX;
      newY = someX
    } else if (someX === firstSquareX) {
      newY = firstSquareY;
      newX = (firstSquareY + wallLength - 1) - someY + firstSquareX;
    }
    return {
      x: newX,
      y: newY,
    }
  }
  let currValue;
  let prevValue = matrix[0][0];
  let newCoord = {};
  let currX = 0;
  let currY = 0;
  let wallPosition = 1;
  while (wallLength >= 2) {
    while (wallPosition < wallLength) {
      while (counter <= 4) {
        newCoord = calcNewCoord(currX, currY);
        currValue = matrix[newCoord.y][newCoord.x];
        matrix[newCoord.y][newCoord.x] = prevValue;
  
        currX = newCoord.x;
        currY = newCoord.y;
        counter++;
        prevValue = currValue;
      }
      currX++;
      wallPosition++;
      counter = 1;
      prevValue = matrix[currY][currX];
    }
    wallPosition = 1;
    wallLength = wallLength - 2;
    firstSquareX++;
    firstSquareY++;
  }
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);

/*
Your input
[
  [1,2,3],
  [4,5,6],
  [7,8,9]]
Output
[
  [7,2,1],
  [4,5,6],
  [9,8,3]]
Expected
[
  [7,4,1],
  [8,5,2],
  [9,6,3]]
*/