/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of
water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  // Brute force- check area of every possible combination of points. O(n^2) time, O(n) space
  // For any single point, the biggest area possible is the widest possible width
  // Start with the widest rectangle and record the width. This is the largest area of the shorter wall
  // Move the rectangle in on the shorter side. Again, this will be the largest area of the new shorter wall

  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  let currentArea = 0;
  while (left < right) {
    currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(currentArea, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};