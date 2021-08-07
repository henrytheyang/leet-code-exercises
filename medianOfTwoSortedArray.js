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
  // We find the median when the subset nums1 + subset nums2 = remainder nums1 + remainder nums2
    // If nums1.length + nums2.length = odd, left side will have one more number
  // Last member of nums1Left < first member of nums2Right
  // Last member of nums2Left < first member of nums1Right
  // Do binary search of smaller set
  let shortArray;
  let longArray;

  if (nums1.length <= nums2.length) {
    console.log('im in here')
    shortArray = nums1;
    longArray = nums2;
  } else {
    shortArray = nums2;
    longArray = nums1;
  }

  let low = 0;
  let high = shortArray.length - 1;
  let middle;
  let leftShortLast;
  let rightShortFirst;
  let leftLongLast;
  let rightLongFirst;

  while (low < high) {
    middle = Math.floor((low + (high - low) / 2));
    leftShortLast = middle;
    rightShortFirst = middle + 1;
    leftLongLast = longArray.length - 1 - middle - 1;
    rightLongFirst = longArray.length - 1 - middle;
    // 3 cases
    // Case 1- size & value requirements met. Return the max of left side if odd, or return the mean of (max left side, min right side) if even
    if (shortArray[leftShortLast] <= longArray[rightLongFirst] && longArray[leftLongLast] <= shortArray[rightShortFirst]) {
      if ((nums1.length + nums2.length) % 2 === 0) { // Even
        console.log((Math.max(shortArray[leftShortLast], longArray[leftLongLast]) + Math.min(shortArray[rightShortFirst], longArray[rightLongFirst])) / 2)
        return ((Math.max(shortArray[leftShortLast], longArray[leftLongLast]) + Math.min(shortArray[rightShortFirst], longArray[rightLongFirst])) / 2)
      } else {
        return Math.max(shortArray[leftShortLast], longArray[leftLongLast]);
      }
    } else if (longArray[leftLongLast] > shortArray[rightShortFirst]) {
      // Case 2- nums1LeftLast < nums2RightFirst but nums2LeftLast > nums1RightFirst
        // nums1Left needs to shift right
      low = middle;
    } else if (shortArray[leftShortLast] > longArray[rightLongFirst]) {
      // Case 3- nums1LeftLast > nums2RightFirst
        // nums1Left needs to shift left
      high = middle;
    }
  }
};

findMedianSortedArrays([1,3], [2])

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