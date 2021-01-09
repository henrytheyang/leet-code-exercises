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
  let largestarea = 0;
  let pStack = [];
  let hStack = [];
  
  // Each index point has a largest possible rectangle
  // Iterate through heights
    // Build stacks tracking heights and the index at which they start
      // Add the height and position to the stacks if the new height is higher than the item at the top of the height stack
    // When you reach a height that is lower than the top of the height stack you've reached the right-side boundary of a rectangle
      // Pop the height off and calculate the area. 
        // If larger than stored area, store new largest area
      // If the next height is greater than current height- pop previous position off, pop that height off as well and calculate area
      // If you reach a height that is less than the current height, store the current height
    // When you reach the end of the heights array- start calculating heights of all remaining points in stacks
  return largestArea;
};





 
// var largestRectangleArea = function(heights) {
//   let largestArea = 0;
//   let storedDomains = [
//     [],
//   ];
//   const scanRightAtHeight = (someHeight, someStartIndex) => {
//     let domain = [];
//     for (let x = someStartIndex; x < heights.length; x++) {
//       if (someHeight <= heights[x]) {
//         if (domain[0] === undefined) {
//           domain = [x, x + 1];
//         } else {
//           domain[1] = x + 1;
//         }
//       } else {
//         // console.log(`domain = ${JSON.stringify(domain)}`)
//         return domain;
//       }
//     }
//     console.log(`domain = ${JSON.stringify(domain)}`)
//     return domain;
//   }

//   if (heights.length === 0) {
//     return 0;
//   }

//   for (let x = 0; x < heights.length; x++) {
//     let currentWidth = [];
//     let previousWidth = [];
//     let currentArea = 0;
//     let y = 1;
//     while (y <= heights[x]) {
//       // If data at height is stored
//       if (storedDomains[y]) {
//         // Check to see if stored data at current height contains data at x
//         for (let i = 0; i < storedDomains[y].length; i++) {
//           // If data at height exists and x is in a stored domain
//           if (storedDomains[y][i][0] <= x && storedDomains[y][i][1] >= x) {
//             currentWidth = [storedDomains[y][i][0], storedDomains[y][i][1]]
//           } else {
//             // If data at height doesn't contain x, it's in a new domain; store it
//             currentWidth = scanRightAtHeight(y, x);
//             storedDomains[y].push(currentWidth);
//           }
//         }
//       } else {
//         // If no domains stored at height
//         currentWidth = scanRightAtHeight(y, x);
//         storedDomains[y] = [currentWidth];
//       }
//       // Calculate rectangle area at current x, for each height
//       // If previousWidth empty
//       if (previousWidth[0] !== undefined) {
//         // If currentWidth[0] is left of previousWidth[0], replace
//         currentWidth[0] = (currentWidth[0] < previousWidth[0]) ? previousWidth[0] : currentWidth[0];
//         // If currentWidth[1] is right of previousWidth[1], replace
//         currentWidth[1] = (currentWidth[1] > previousWidth[1]) ? previousWidth[1] : currentWidth[1];        
//       }
//       currentArea = (currentWidth[1] - currentWidth[0]) * y;
//       largestArea = (largestArea > currentArea) ? largestArea : currentArea;
//       previousWidth = currentWidth;
//       y++;
//     }
    
//   }
//   return largestArea;
// };

largestRectangleArea([2,1,5,6,2,3]);