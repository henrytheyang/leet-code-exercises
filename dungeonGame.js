/*
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists 
of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight 
his way through dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 
or below, he dies immediately.

Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering 
these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health 
(represented by positive integers).

To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Return the knight's minimum initial health so that he can rescue the princess.

Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room 
where the princess is imprisoned.

 

Example 1:


Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output: 7
Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.
Example 2:

Input: dungeon = [[0]]
Output: 1
 

Constraints:

m == dungeon.length
n == dungeon[i].length
1 <= m, n <= 200
-1000 <= dungeon[i][j] <= 1000
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  // We need to find the path that has the greatest minimum point
  // DP track both the path minimum and the current sum
    // At each square compute the current sum
    // Compare current sum and old minimum; if the sum is lower than the minimum, replace
  // At the last square
    // If minimum is negative, return one more than the absolute value of the minimum
    // If the minimum is non-negative, return 1

  let HPTracker = new Array(dungeon[0].length);
  let aboveSum;
  let leftSum;
  let aboveMin;
  let leftMin;
  for (let i = 0; i < dungeon.length; i++) {
    HPTracker[i] = new Array(dungeon[0].length).fill({sum: 0, min: 0});
  }
  HPTracker[0][0] = {
    sum: dungeon[0][0],
    min: dungeon[0][0]
  };

  for (let j = 1; j < dungeon.length; j++) {
    aboveSum = HPTracker[j - 1][0].sum;
    aboveMin = HPTracker[j - 1][0].min;
    HPTracker[j][0].sum = dungeon[j][0] + aboveSum;
    HPTracker[j][0].min = Math.min(aboveMin, HPTracker[j][0].sum);
  }

  for (let k = 1; k < dungeon[0].length; k++) {
    leftSum = HPTracker[0][k - 1].sum;
    leftMin = HPTracker[0][k - 1].min;
    HPTracker[0][k].sum = dungeon[0][k] + leftSum;
    HPTracker[0][k].min = Math.min(leftMin, HPTracker[0][k].sum)
    // HPTracker[0][k] = dungeon[0][k] + HPTracker[0][k - 1];
  }

  for (let l = 1; l < dungeon.length; l++) {
    for (let m = 1; m < dungeon[0].length; m++) {
      aboveSum = HPTracker[l - 1][m].sum;
      leftSum = HPTracker[l][m - 1].sum;
      aboveMin = HPTracker[l - 1][m].min;
      leftMin = HPTracker[l][m - 1].min;
      HPTracker[l][m].sum = dungeon[l][m] + Math.max(leftSum, aboveSum);
      HPTracker[l][m].min = Math.min(HPTracker[l][m].sum, leftMin, aboveMin);
    }
  }

  if (HPTracker[HPTracker.length - 1][HPTracker[0].length - 1].min >= 0) return 1;
  else return Math.abs(HPTracker[HPTracker.length - 1][HPTracker[0].length - 1].min) + 1;
};
calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]);

/*
Input:
Input:
[[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output:
13
Expected:
7
*/