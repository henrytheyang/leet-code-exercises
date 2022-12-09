/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return 
the maximum number of points that lie on the same straight line.

 

Example 1:


Input: points = [[1,1],[2,2],[3,3]]
Output: 3
Example 2:


Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
 

Constraints:

1 <= points.length <= 300
points[i].length == 2
-104 <= xi, yi <= 104
All the points are unique.
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  // For any two points,  things are on a specific line if they share a point and have the same slope
  // m = (y2 - y1) / (x2 - x1)
  // Nested loop-
  // Record max # of points on each slope line
  // Keep going until there is fewer number of combinations than the max left over
  if (points.length <= 2) return points.length;
  let bank, slope;
  let max = 2;

  for (let i = 0; i < points.length; i++) {
    if (max >= points.length - i) return max;

    bank = {};
    for (let j = i + 1; j < points.length; j++) {
      slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
      bank[slope] = bank[slope] === undefined ? 2 : bank[slope] + 1;
      if (max < bank[slope]) max = bank[slope];
    }
  }
  console.log('should never get here');
  return max;
};
maxPoints([[1,1],[2,2],[3,3]]);
/*
Input
points =
[[1,1],[2,2],[3,3]]
Output
2
Expected
3
*/
