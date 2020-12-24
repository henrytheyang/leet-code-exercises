/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
               _
             _| |                                       
            |*|*|    
            |*|*|  _ 
         _  |*|*|_| |
        | |_|*|*| | |
        | | |*|*| | |
Height   2 1 5 6 2 3 
Index    0 1 2 3 4 5 
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:
Input: [2,1,5,6,2,3]
Output: 10
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // Find greatest rectangle at each index point, for all heights it covers
  // Iterate through array's x-axis
    // Iterate through current x-coord's y-axis
    // Check to see if domain is memoized at this x,y
    // If not:
      // Memoize the domain at each height
      // Iterate through array to see how far right a continuous rectangle extends at the current height
      // Store the rectangle's domain
    // If it is: 
      // Recall rectangle width
    // Determine largest rectangle that has this x,y at the top. Use smallest left,right that is in common for all heights at this x-coord
    // Compare area to stored largest area
      // If the area > stored area, store new largest area
  // Return largest area

  /*
  storedDomains = [
    [],
    [[0, 2], [3, 5]],
  ]
  */

  let largestArea = 0;
  let storedDomains = [
    [],
  ];
  const scanRightAtHeight = (someArray, someHeight, someStartIndex) => {
    let domain = [];
    if (someHeight > someArray[x]) {
      return domain;
    }
    for (let x = someStartIndex; x < someArray.length; x++) {
      if (someHeight <= someArray[x]) {
        if (!domain[0]) {
          domain = [x, x];
        } else {
          domain[1] = x;
        }
      } else {
        return domain;
      }
    }
    return domain;
  }

  if (heights.length === 0) {
    return 0;
  }
  for (let x = 0; x < heights.length; x++) {
    let currentWidth = [];
    let y = 1;
    while (y <= heights[x]) {
      // If data at height is stored
      if (storedDomains[y]) {
        // Check to see if stored data at current height contains data at x
        for (let i = 0; i < storedDomains[y].length; i++) {
          if (storedDomains[y][i][0] <= x && storedDomains[y][i][1] >= x) {
            currentWidth = [storedDomains[y][i][0], storedDomains[y][i][1]]
          } else {
            // If the stored data at current height doesn't contain x, it's in a new domain; store it

          }
        }
      }
      // If data point is not stored
      y++;
    }
  }
  return storedDomains
  return largestArea;
};

largestRectangleArea([2,1,5,6,2,3]);