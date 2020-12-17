/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  // Sort intervals entries by size
  let firstEnd, secondStart, secondEnd, newEnd;
  intervals.sort((a, b) => a[0] - b[0]);
  // Loop through intervals
  let i = 0;
  while (i < intervals.length - 1) {
    [__, firstEnd] = intervals[i];
    [secondStart, secondEnd] = intervals[i + 1];
    // If the next entry's firstNumber <= current entry's secondNumber merge the two intervals by taking the larger of the two secondNumber
    if (firstEnd >= secondStart) {
      if (firstEnd >= secondEnd) {
        newEnd = firstEnd;
      } else {
        newEnd = secondEnd;
      }
      intervals[i] = [__, newEnd];
    // Splice out the next entry
      intervals.splice((i + 1), 1);
    } else {
      // Move onto next pairing if no overlap
      i++;
    }
  }
  return intervals;
};

// merge([[1,4],[0,4]]);
merge([[1,4],[2,3]]);