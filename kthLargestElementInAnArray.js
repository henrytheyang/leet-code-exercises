/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // Sort using a pivot.
  // After pivot is sorted to the right place discard the subarray that doesn't contain the target index
  // Divide and conquer, continue until we've divided down to a one length subarray at the target index
  let foundTarget = false;

  const quickSort = (left, right) => {
    let pivot = Math.floor((left + right)/2);
    while (left < right) {
      while (nums[left] < nums[pivot] && left < right) left++;
      while (nums[right] > nums[pivot] && left < right) right--;
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
    if (left === k) foundTarget = true;
    return left;
  }

  while (foundTarget === false) {
    let pivot = quickSort(0, nums.length - 1);
    if (foundTarget === true) return nums[k];
    else if (k < pivot) quickSort(left, pivot);
    else quickSort(pivot, right);
  }

  return nums[k];
}
findKthLargest([3,2,1,5,6,4], 2);
/*
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/
