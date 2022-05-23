/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).


Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000

Example 4:
Input: nums1 = [], nums2 = [1]
Output: 1.00000

Example 5:
Input: nums1 = [2], nums2 = []
Output: 2.00000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // We find the median when 
  // the # of entries in (subset nums1 + subset nums2) = (remainder nums1 + remainder nums2)
    // If nums1.length + nums2.length = odd, left side will have one more number
  // Last member of nums1Left < first member of nums2Right
  // Last member of nums2Left < first member of nums1Right

  // Do binary search of smaller set
  let shortArray;
  let longArray;
  let answer;

  if (nums1.length <= nums2.length) {
    shortArray = nums1;
    longArray = nums2;
  } else {
    shortArray = nums2;
    longArray = nums1;
  }
  let low = 0;
  let high = shortArray.length;
  let partitionIndexShort = Math.floor((low + high)/2);
  let partitionIndexLong = (shortArray.length + longArray.length + 1) /2 - partitionIndexShort;

  // Edge case: partition is either at 0 or end of shortArray; in that case use -inf or +inf when comparing to get median
    // empty,    10, 20
    // 0, 1, 2   empty

    // 5, 6      empty
    // empty     8, 9, 10
  let shortLeftLast = (shortArray[partitionIndexShort -1]) ? shortArray[partitionIndexShort -1] : Number.NEGATIVE_INFINITY;
  let longRightFirst = (longArray[partitionIndexLong]) ? longArray[partitionIndexLong] : Number.POSITIVE_INFINITY;
  let longLeftLast = (longArray[partitionIndexLong - 1]) ? longArray[partitionIndexLong - 1] : Number.NEGATIVE_INFINITY;
  let shortRightFirst = (shortArray[partitionIndexShort]) ? shortArray[partitionIndexShort] : Number.POSITIVE_INFINITY;

  // 3 scenarios:
  while (!(shortLeftLast <= longRightFirst && longLeftLast <= shortRightFirst)) {
    // Scenario 1: shortLeftLast > longRightFirst;
      // 50         60, 70
      // 1 2 3      4
    if (shortLeftLast > longRightFirst) {
      // Short partition is too far right, need to move it left, do binary search of remainder of digits to the left in shortArray
      high = partitionIndexShort - 1;
      partitionIndexShort = Math.floor((low + high)/2);
      partitionIndexLong = (shortArray.length + longArray.length + 1) /2 - partitionIndexShort;
    } else if (longLeftLast > shortRightFirst) {
    // Scenario 2: longLeftLast > shortRightFirst;
      // empty       1, 2
      // 10, 20, 30  empty
      // partitionIndexShort is too far left; do binary search of remainder of digits to the right in shortArray;
      low = partitionIndexShort;
      partitionIndexShort = Math.floor((low + high)/2);
      partitionIndexLong = (shortArray.length + longArray.length + 1) /2 - partitionIndexShort;
    }
  }
  // Scenario 3: shortLeftLast < longRightFirst && longLeftLast < shortRightFirst
  // Success; found correct partition
  if ((nums1.length + nums2.length) % 2 === 0) {
    // If total number of digits is even, return avg of (MaxLeft + MinRight)
    answer = (Math.max(shortArray[partitionIndexShort], longArray[partitionIndexLong]) + Math.min(shortArray[partitionIndexLong + 1], longArray[partitionIndexLong + 1])) / 2
  } else {
    // else if total number of digits is odd, return value of MaxLeft
    answer = Math.max(shortArray[partitionIndexShort], longArray[partitionIndexLong]);
  }
  
  return answer;
};

findMedianSortedArrays([1,2], [3,4])

// [2, 3, 4], [2, 5, 6]
// Case 1
// 2, 3     4       short
// 2        5 6     long
// Case 2
// 2        3 4
// 2, 5     6
// Case 3
// 2 3 4   
//          2 5 6

