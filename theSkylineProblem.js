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
var getSkyline = function(buildings) {
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
  buildingEdges.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      // Edge cases on sorting start/end points
      // Start points overlap- Add Higher first
      if (a[1] < 0 && b[1] < 0) {
        if (a[1] > b[1]) {
          return 1;
        } else {
          return -1;
        }
      }
      // End points overlap- Delete Lower first
      else if (a[1] > 0 && b[1] > 0) {
        if (a[1] < b[1]) {
          return -1;
        } else {
          return 1;
        }
      }
      // Start and end point overlap- Add Start first
      else if (a[1] * b[1] < 0) {
        if (a[1] < 0) {
          return -1;
        } else {
          return 1;
        }
      }
    }
  });
  
  for (j = 0; j < buildingEdges.length; j++) {
    lastHeight = maxHeight;
    currentHeight = buildingEdges[j][1];
    if (currentHeight < 0) {  // Encountering start height
      currentHeight = Math.abs(currentHeight);
      if (currentHeight > maxHeight) { // Update maxHeight
        maxHeight = currentHeight;
      }
      if (!heightMap[currentHeight]) {
        heightMap[currentHeight]= 1;
      } else {
        heightMap[currentHeight] = heightMap[currentHeight] + 1;
        // heightMap[currentHeight]++;
      }
    } else { // Encountering end height
      heightMap[currentHeight] = heightMap[currentHeight] - 1;
      if (heightMap[currentHeight] === 0) {
        delete heightMap[currentHeight];
      }
      if (heightMap[maxHeight] === undefined) { // Find new maxHeight in heightMap
        maxHeight = 0;
        for (key in heightMap) {
          let keyToNumber = key - 0;
          if (keyToNumber > maxHeight) {
            maxHeight = keyToNumber;
          }
        }
        currentHeight = maxHeight;
      }
    }
    if (maxHeight !== lastHeight) {
      answer.push([buildingEdges[j][0], currentHeight]);
    }
  } 
  console.log(`answer = ${answer}`)
  return answer;
};

getSkyline([[1,38,219],[2,19,228],[2,64,106],[3,80,65],[3,84,8],[4,12,8],[4,25,14],[4,46,225],[4,67,187],[5,36,118],[5,48,211],[5,55,97],[6,42,92],[6,56,188],[7,37,42],[7,49,78],[7,84,163],[8,44,212],[9,42,125],[9,85,200],[9,100,74],[10,13,58],[11,30,179],[12,32,215],[12,33,161],[12,61,198],[13,38,48],[13,65,222],[14,22,1],[15,70,222],[16,19,196],[16,24,142],[16,25,176],[16,57,114],[18,45,1],[19,79,149],[20,33,53],[21,29,41],[23,77,43],[24,41,75],[24,94,20],[27,63,2],[31,69,58],[31,88,123],[31,88,146],[33,61,27],[35,62,190],[35,81,116],[37,97,81],[38,78,99],[39,51,125],[39,98,144],[40,95,4],[45,89,229],[47,49,10],[47,99,152],[48,67,69],[48,72,1],[49,73,204],[49,77,117],[50,61,174],[50,76,147],[52,64,4],[52,89,84],[54,70,201],[57,76,47],[58,61,215],[58,98,57],[61,95,190],[66,71,34],[66,99,53],[67,74,9],[68,97,175],[70,88,131],[74,77,155],[74,99,145],[76,88,26],[82,87,40],[83,84,132],[88,99,99]]);
/*
Output
[[1,219],[2,228],[19,97],[31,146],[35,190],[45,229],[89,99],[99,74],[100,0]]
Expected
[[1,219],[2,228],[19,225],[45,229],[89,190],[95,175],[97,152],[99,74],[100,0]]
*/