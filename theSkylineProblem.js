/*
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance.
Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:

lefti is the x coordinate of the left edge of the ith building.
righti is the x coordinate of the right edge of the ith building.
heighti is the height of the ith building.
You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...].
Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always
has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the
leftmost and rightmost buildings should be part of the skyline's contour.

Note: There must be no consecutive horizontal lines of equal height in the output skyline.
For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into
one in the final output as such: [...,[2 3],[4 5],[12 7],...]

 

Example 1:


Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
Explanation:
Figure A shows the buildings of the input.
Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.
Example 2:

Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
 

Constraints:

1 <= buildings.length <= 104
0 <= lefti < righti <= 231 - 1
1 <= heighti <= 231 - 1
buildings is sorted by lefti in non-decreasing order.
*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  // Find highest point of every point along the range; x is where it starts, y is the height
  // Input is an array of arrays with left, right boundaries, and the height
  // Answer is an array made up of arrays with the starting point of new (x) and the height(y)

  // Transform input array into an [heights] array of start & end points, sorted by x-coord, of (x, y) shape

  // We are concerned with changes in max height.
  // Max height starts at 0
  // Iterate through heights array
  // Check max height after every heights input
  // Add height to map when hitting a start point, pop a height when hitting an end point
  // If max height changes, add [x, max height] to answer array

  let answer = [];
  let buildingEdges = [];
  let maxHeight = 0;
  let lastHeight = 0;
  let currentHeight = 0;
  let heightMap = {};

  for (i = 0; i < buildings.length; i++) {
    buildingEdges.push([buildings[i][0], -(buildings[i][2])]);
    buildingEdges.push([buildings[i][1], buildings[i][2]])
  }
  buildingEdges.sort((a, b) => a[0] - b[0]);
  
  for (j = 0; j < buildingEdges.length; j++) {
    lastHeight = maxHeight;
    currentHeight = buildingEdges[j][1];
    if (currentHeight > maxHeight) { // Update maxHeight
      maxHeight = currentHeight;
    }
    if (currentHeight < 0) {  // Encountering start height
      currentHeight = Math.abs(currentHeight);
      if (!heightMap[currentHeight]) {
        heightMap = {
          [currentHeight]: 1,
        }
      } else {
        heightMap[currentHeight] = heightMap[currentHeight] + 1;
        // heightMap[currentHeight]++;
      }
    } else { // Encountering end height
      heightMap[currentHeight] = heightMap[currentHeight] - 1;
      // Find new maxHeight in heightMap
      for (key in heightMap) {
        if (key > maxHeight) {
          maxHeight = key;
        }
      }
    }
    if (maxHeight !== lastHeight) {
      answer.push[buildingEdges[j][0], buildingEdges[j][1]];
    }
  } 
  console.log(`answer = ${answer}`)
  return answer;
};

getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]);