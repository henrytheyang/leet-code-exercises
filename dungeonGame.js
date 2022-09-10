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

  let HPTracker = new Array(dungeon.length);
  let selectedPath;
  for (let i = 0; i < dungeon.length; i++) {
    HPTracker[i] = new Array(dungeon[0].length);
    for (let j = 0; j < HPTracker[i].length; j++) {
      HPTracker[i][j] = {sum: 0, min: 0};
    }
  }
  HPTracker[0][0] = {
    sum: dungeon[0][0],
    min: dungeon[0][0]
  };

  for (let j = 1; j < dungeon.length; j++) {
    HPTracker[j][0].sum = dungeon[j][0] + HPTracker[j - 1][0].sum;
    HPTracker[j][0].min = Math.min(HPTracker[j - 1][0].min, HPTracker[j][0].sum);
  }

  for (let k = 1; k < dungeon[0].length; k++) {
    HPTracker[0][k].sum = dungeon[0][k] + HPTracker[0][k - 1].sum;
    HPTracker[0][k].min = Math.min(HPTracker[0][k - 1].min, HPTracker[0][k].sum)
  }

  for (let l = 1; l < dungeon.length; l++) {
    for (let m = 1; m < dungeon[0].length; m++) {
      if (HPTracker[l][m - 1].min > HPTracker[l - 1][m].min) selectedPath = HPTracker[l][m - 1];
      else if (HPTracker[l][m - 1].min < HPTracker[l - 1][m].min) selectedPath = HPTracker[l - 1][m];
      else if (HPTracker[l][m - 1].sum >= HPTracker[l - 1][m].sum) selectedPath = HPTracker[l][m - 1];
      else selectedPath = HPTracker[l - 1][m];

      HPTracker[l][m].sum = dungeon[l][m] + selectedPath.sum;
      HPTracker[l][m].min = Math.min(HPTracker[l][m].sum, selectedPath.min);
    }
  }

  if (HPTracker[HPTracker.length - 1][HPTracker[0].length - 1].min >= 0) return 1;
  else return Math.abs(HPTracker[HPTracker.length - 1][HPTracker[0].length - 1].min) + 1;
};
calculateMinimumHP([[1,-3,3],[0,-2,0],[-3,-3,-3]]);

/*
Input:
[[1,-3,3],[0,-2,0],[-3,-3,-3]] 
Output:
5           // DP from the entrance may make local mins but not global mins; try going from exit
Expected:
3
*/