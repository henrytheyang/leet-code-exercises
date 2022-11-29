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
  // Use quick select
  // Check index against kth largest; quick select subarray kth largest is in
  // Continue until pivot is kth largest
  if (nums.length === 1) return nums[nums.length - k];
  let target = nums.length - k;


  const quickSelect = (leftWall, rightWall) => {
    let pivot = rightWall;
    let pointer = leftWall - 1;
    for (let i = leftWall; i <= rightWall; i++) {
      if (nums[i] < nums[pivot]) {
        pointer++;
        let temp = nums[i];
        nums[i] = nums[pointer];
        nums[pointer] = temp;
      }
    }
    if (pointer < rightWall - 1) {
      pointer++;
      let temp = nums[pivot];
      nums[pivot] = nums[pointer];
      nums[pointer] = temp;
    }
    
    if (target === pointer) return nums[pointer];
    else if (target < pointer) quickSelect(leftWall, pointer);
    else quickSelect(pointer, rightWall);
  }

  quickSelect(0, nums.length - 1);
  return nums[target];
}
findKthLargest([2,1], 1);
/*
[2,1]
1
*/
