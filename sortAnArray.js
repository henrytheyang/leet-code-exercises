/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time 
complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed 
(for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
  var sortArray = function(nums, left = 0, right = nums.length - 1) {
    // Divide & conquer strat + 3 pointers (pivot, i,j)
      // Left & right side of array, set pivot to right side
      // Increment j from left to pivot
      // When you hit a value that is less than the pivot value
        // Increment i, swap positions of i and j
      // Keep incrementing j until it equals p
      // Increment i one last time, swap places of p and i
    // Next round, recursively run pivot on the two subarrays you've made on either side of pivot
    // Continue while the subarrays left & right edges are discreet
    const pivot = (leftIndex, rightIndex) => {
      let i = leftIndex - 1;
      let pivot = rightIndex;
      for (let j = leftIndex; j < pivot; j++) {
        if (nums[j] < nums[pivot]) {
          i++;
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
        }
      }
      i++;
      let temp = nums[i];
      nums[i] = nums[pivot];
      nums[pivot] = temp;

      return i;
    }

    if (left < right) {
      let pivotIndex = pivot(left, right);
      sortArray(nums, left, pivotIndex - 1);
      sortArray(nums, pivotIndex + 1, right);
    }
    return nums;
  };

  sortArray([5,2,3,1]);