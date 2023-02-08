/*
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the 
number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 

Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
Example 2:

Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
 

Constraints:

n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  // Store value of every combo of nums3[x] + nums4[y] and # of instances
  // Run nested loops with every combo of nums1[x] + nums2[y] and search in constant time
  // for corresponding value in storage
  // TC: O(n^2)
  // SC: O(n^2)
  let nums3Nums4Bank = {};
  let count = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      nums3Nums4Bank[nums3[i] + nums4[j]] = nums3Nums4Bank[nums3[i] + nums4[j]] === undefined ? 1 : nums3Nums4Bank[nums3[i] + nums4[j]] + 1;
    }
  }
  for (i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (nums3Nums4Bank[-1 * (nums1[i] + nums2[j])] !== undefined) count+= nums3Nums4Bank[-1 * (nums1[i] + nums2[j])]
    }
  }
  return count;
};
fourSumCount([1,2], [-2, -1], [-1, 2], [0, 2]);

/*
Input
nums1 =
[1,2]
nums2 =
[-2,-1]
nums3 =
[-1,2]
nums4 =
[0,2]
Output
NaN
Expected
2
*/