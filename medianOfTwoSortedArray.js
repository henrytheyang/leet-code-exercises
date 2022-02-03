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

  // Last member of nums2Right < first member of nums1Left

  // Do binary search of smaller set
  let shortArray;
  let longArray;

  if (nums1.length <= nums2.length) {
    shortArray = nums1;
    longArray = nums2;
  } else {
    shortArray = nums2;
    longArray = nums1;
  }

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