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
  for (let i = 0; i < dungeon.length; i++) {
    HPTracker[i] = new Array(dungeon[0].length);
  }
  HPTracker[0][0] = -2;

  for (let j = 1; j < dungeon.length; j++) {
    HPTracker[j][0] = dungeon[j][0] + HPTracker[j - 1][0];
  }

  for (let k = 1; k < dungeon[0].length; k++) {
    HPTracker[0][k] = dungeon[0][k] + HPTracker[0][k - 1];
  }

  for (let l = 1; l < dungeon.length; l++) {
    for (let m = 1; m < dungeon[0].length; m++) {
      HPTracker[l][m] = dungeon[l][m] + Math.max(HPTracker[l][m - 1], HPTracker[l - 1][m])
    }
  }

  return HPTracker[HPTracker.length - 1][HPTracker[0].length - 1] + 1;
};
calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]);

/*
Input:
[[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output:
29
Expected:
7
*/