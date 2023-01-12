/*
You are given an integer array nums and an integer k.

Find the longest subsequence of nums that meets the following requirements:

The subsequence is strictly increasing and
The difference between adjacent elements in the subsequence is at most k.
Return the length of the longest subsequence that meets the requirements.

A subsequence is an array that can be derived from another array by deleting some or no elements 
without changing the order of the remaining elements.

 

Example 1:
Input: nums = [4,2,1,4,3,4,5,8,15], k = 3
Output: 5
Explanation:
The longest subsequence that meets the requirements is [1,3,4,5,8].
The subsequence has a length of 5, so we return 5.
Note that the subsequence [1,3,4,5,8,15] does not meet the requirements because 15 - 8 = 7 is 
larger than 3.

Example 2:
Input: nums = [7,4,5,1,8,12,4,7], k = 5
Output: 4
Explanation:
The longest subsequence that meets the requirements is [4,5,8,12].
The subsequence has a length of 4, so we return 4.

Example 3:
Input: nums = [1,5], k = 1
Output: 1
Explanation:
The longest subsequence that meets the requirements is [1].
The subsequence has a length of 1, so we return 1.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 105
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
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
    while (nums[indexOfMinLastValOfSeq[mid]] < val || nums[indexOfMinLastValOfSeq[mid - 1]] > val) {
      if (nums[indexOfMinLastValOfSeq[mid]] === val) return false;
      else if (nums[indexOfMinLastValOfSeq[mid]] < val) {
        low = mid + 1;
        mid = Math.floor((low + high) / 2);
      }
      else if (nums[indexOfMinLastValOfSeq[mid - 1]] && nums[indexOfMinLastValOfSeq[mid - 1]] > val) {
        high = mid - 1;
        mid = Math.floor((low + high) / 2);
      }
    }
    indexOfMinLastValOfSeq[mid] = index;
    path[index] = indexOfMinLastValOfSeq[mid - 1];
  }

  for (let i = 0; i < nums.length; i ++) {
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
  return answer;
};

lengthOfLIS([4,2,1,4,3,4,5,8,15], 3)
/*
Input
nums =
[4,2,1,4,3,4,5,8,15]
k =
3
Output
NaN
Expected
5
*/