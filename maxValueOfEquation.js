/*
You are given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, 
where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k.

Return the maximum value of the equation yi + yj + |xi - xj| where |xi - xj| <= k and 1 <= i < j <= points.length.

It is guaranteed that there exists at least one pair of points that satisfy the constraint |xi - xj| <= k.

 

Example 1:

Input: points = [[1,3],[2,0],[5,10],[6,-10]], k = 1
Output: 4
Explanation: The first two points satisfy the condition |xi - xj| <= 1 and if we calculate the equation 
we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 + |5 - 6| = 1.
No other pairs satisfy the condition, so we return the max of 4 and 1.
Example 2:

Input: points = [[0,0],[3,0],[9,2]], k = 3
Output: 3
Explanation: Only the first two points have an absolute difference of 3 or less in the x-values, and 
give the value of 0 + 0 + |0 - 3| = 3.
 

Constraints:

2 <= points.length <= 105
points[i].length == 2
-108 <= xi, yi <= 108
0 <= k <= 2 * 108
xi < xj for all 1 <= i < j <= points.length
xi form a strictly increasing sequence.
*/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
  // Two pointer solution
  // Increment right pointer, finding sum until difference between x > k
  // Increment left pointer
  // We're duplicating work by recalculating every point in frame
  // We can instead use a monotonic decr queue to keep track of the best partner in the window
  // Two pointer solution- left is set, right examines points for adding to monoqueue
  // While the point is in range:
    // Each new point seen by right- rel value = y - x
    // Pop every point lower in value
    // Push point to end
    // Increment right
  // When we right points at something out of range
    // Find max of left + head of monoqueue
    // Increment left
    // Shift every point less than left
    // Evaluate right as above
  const findSum = (i, j) => {
    return points[i][1] + points[j][1] + Math.abs(points[i][0] - points[j][0]);
  }
  let left = 0;
  let right = 1;
  let sum;
  let max;
  while (left < points.length - 1) {
    if (Math.abs(points[left][0] - points[right][0]) <= k) {
      sum = findSum(left, right);
      max = max === undefined ? sum : Math.max(max, sum);
      if (right < points.length - 1) right++;
      else {
        left++;
        right = left + 1;
      }
    } else {
      left++;
      right = left + 1;
    }
  }
  return max;
};