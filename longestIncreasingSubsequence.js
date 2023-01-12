/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// We can augment a DP solution by using binary search to maintain an array of indices 
// pointing at the minimum value of a LIS of a certain length
// Whenever we encounter a new value we either add it to the end of the array if the value
// is larger than the largest value, or we replace the first value that's larger than it

var lengthOfLIS = function(nums, k) {
  // DP solution, monotonic queue solution
  // We can eliminate extraneous values from nums by only tracking the index of the minimum last
  // value of an increasing subsequence of length x
  // For each value stored, we can store its path in an array by pointing at the index before it
  // Increment through nums
    // If the value is smaller than the first value stored, replace the first index
    // If the value is greater than the last value stored, add it to the end of the array storing lasts
    // Else use binary search to find the stored value larger than the current value, and replace it
    // Store the value that comes immediately comes before it in the path
  let path = new Array(nums.length).fill(-1);
  let indexOfMinLastValOfSeq = new Array();
  let answer = [];
  const replaceValueBinarySearch = (val, index) => {
    let low = 0;
    let high = indexOfMinLastValOfSeq.length - 1;
    let mid = Math.floor((low + high) / 2); // Looking for mid, the first val greater than our searched val
    while (low < high) {
      if (nums[indexOfMinLastValOfSeq[mid]] === val) return false;
      else if (nums[indexOfMinLastValOfSeq[mid]] < val) {
        low = mid + 1;
        mid = Math.floor((low + high) / 2);
      }
      else if (nums[indexOfMinLastValOfSeq[mid]] > val) {
        high = mid;
        mid = Math.floor((low + high) / 2);
      }
    }
    indexOfMinLastValOfSeq[mid] = index;
    path[index] = indexOfMinLastValOfSeq[mid - 1];
  }

  for (let i = 0; i < nums.length; i ++) {
    // if (i === 45) {
    //   console.log('here');
    // }
  if (indexOfMinLastValOfSeq.length === 0 || nums[i] < nums[indexOfMinLastValOfSeq[0]]) {
      indexOfMinLastValOfSeq[0] = i;
    } else if (nums[i] > nums[indexOfMinLastValOfSeq[indexOfMinLastValOfSeq.length -1]]) {
      indexOfMinLastValOfSeq[indexOfMinLastValOfSeq.length] = i;
      path[i] = indexOfMinLastValOfSeq[indexOfMinLastValOfSeq.length - 2];
    } else {
      replaceValueBinarySearch(nums[i], i);
    }
  }

  let counter = indexOfMinLastValOfSeq.length - 1;
  let nextIndex = indexOfMinLastValOfSeq[counter];
  while (counter >= 0) {
    answer[counter] = nums[nextIndex];
    nextIndex = path[nextIndex];
    counter--;
  }
  return answer.length;
};


var DPOnlyLengthOfLIS = function(nums) {
  // DP Solution
  // Starting from the rear, track how long of an incrementing sequence we can make from the current index
    // For each index, it's max of (1, or 1 + any dp[index]) that is larger than the current value
  let answer = 0;
  let dp = new Array(nums.length).fill(1);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
    if (dp[i] > answer) answer = dp[i];
  }
  
  return answer;
};
lengthOfLIS([10,9,2,5,3,7,101,18]);

/*
Your input
[10,9,2,5,3,7,101,18]
Output
2
Expected
4
*/