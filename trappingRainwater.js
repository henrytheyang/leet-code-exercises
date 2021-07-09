/*
42. Trapping Rain Water
Hard

12394

176

Add to List

Share
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

*/

/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
  // Height of water at each point of the array only depends upon the the max walls to the left & right and the current water level
  // Scan the height array from left and right, recording max height
  // Scan height array 3rd time, taking the diff between minimum of walls and the current height, accumulating diff
  let volume = 0;
  let maxLeft = [];
  let maxRight = [];

  return volume;
};