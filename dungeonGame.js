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
  // DP from the entrance may make local mins but not global mins; try going from exit

  let DmgTracker = new Array(dungeon.length);
  let selectedPath;
  for (let i = 0; i < dungeon.length; i++) {
    DmgTracker[i] = new Array(dungeon[0].length);
  }
  DmgTracker[dungeon.length - 1][dungeon[0].length - 1] = Math.min(0, dungeon[dungeon.length - 1][dungeon[0].length - 1]);

  for (let j = dungeon.length - 2; j >= 0; j--) {
    DmgTracker[j][dungeon[0].length - 1] = Math.min(0, DmgTracker[j + 1][dungeon[0].length - 1] + dungeon[j][dungeon[0].length - 1]);
  }

  for (let k = dungeon[0].length - 2; k >= 0; k--) {
    DmgTracker[dungeon.length - 1][k] = Math.min(0, dungeon[dungeon.length - 1][k]  + DmgTracker[dungeon.length - 1][k + 1]);
  }
  
  for (let l = dungeon.length - 2; l >= 0; l--) {
    for (let m = dungeon[0].length - 2; m >= 0; m--) {
      DmgTracker[l][m] = Math.min(0, dungeon[l][m]) + Math.max(DmgTracker[l + 1][m], DmgTracker[l][m + 1]);
    }
  }

  if (DmgTracker[0][0] >= 0) return 1;
  else return (- 1 * DmgTracker[0][0]) + 1;
};
calculateMinimumHP([[-3,5]]);

/*
Input:
[[-3,5]]
Output:
1
Expected:
4
*/