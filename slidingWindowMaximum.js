/*
You are given an array of integers nums, there is a sliding window of size k which 
is moving from the very left of the array to the very right. You can only see the k 
numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // Queue sorted by size
  // When window shifts
    // 'Shift the order'
    // Binary search to delete the old value
    // Binary search to insert the new value
  let maxWindowValues = [];
  const insert = (val) => {

  }
  const remove = (val) => {
    let low = 0;
    let high = k - 1;
    let mid = (low + high) / 2;
    while (sorted[mid] !== val) {
      if (sorted[mid] === val) {
        break;
      } else if (sorted[mid] < val) {
        low = mid;
      } else if (sorted[mid] > val) {
        high = mid;
      }
    }
    if (mid === 0) {
      sorted = [...sorted.slice(1, sorted.length)];
    } else {
      sorted = [...sorted.slice(0, mid), ...sorted.slice(mid + 1, sorted.length)];
    }
  }

  if (k === 1) return nums[nums.length - 1];
  
  let left = 0;
  let right = k - 1;
  let sorted = [...nums.slice(left, right + 1)].sort((a, b) => a - b);
  maxWindowValues[0] = sorted[sorted.length - 1];

  while (right <= nums.length - 1) {
    remove(nums[left]);
    left++;
    right++;
    insert(nums[right]);
    maxWindowValues[left] = sorted[sorted.length - 1];
  }
  return maxWindowValues;
};
maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);

/*
Input
nums =
[1,3,-1,-3,5,3,6,7]
k =
3
Output
[3,3,3,5,14,16]
Expected
[3,3,5,5,6,7]
*/