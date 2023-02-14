/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 
Follow up: Your algorithm's time complexity must be better than O(n log n), where 
n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // Sort
  // Iterate through nums, tracking count
  // Once we have the count, compare with the monotonic decreasing queue of counts
  // Binary search it until we find where it occurs in the order.
    // If length of queue === k pop last element
  let monoQueueVal = [];
  let monoQueueCount = [];
  const findIndex = (count) => {
    let high = monoQueueCount.length - 1, low = 0, mid;
    if (count <= monoQueueCount[monoQueueCount.length - 1]) return monoQueueCount.length;
    else if (count > monoQueueCount[0]) return 0;
    while (low < high) {
      mid = Math.floor((low + high) / 2);
      if (monoQueueCount[mid] > count && monoQueueCount[mid + 1] < count) return mid;
      else if (monoQueueCount[mid] < count) low = mid;
      else high = mid;
    }
  };
  nums.sort((a,b) => a - b);
  let val = nums[0], count = 0, index;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val && i < nums.length - 1) count++;
    else {
      if (monoQueueCount.length === 0) {
        monoQueueCount.push(count);
        monoQueueVal.push(val);
      } else {
        index = findIndex(count);
        monoQueueCount = [...monoQueueCount.slice(0, index), count, ...monoQueueCount.slice(index)];
        monoQueueVal = [...monoQueueVal.slice(0, index), val, ...monoQueueVal.slice(index)];
        if (monoQueueVal.length > k) {
          monoQueueCount.pop();
          monoQueueVal.pop();
        }
      }
      val = nums[i];
      count = 1;
    }
    if (i === nums.length - 1) {
      index = findIndex(count);
      monoQueueCount = [...monoQueueCount.slice(0, index), count, ...monoQueueCount.slice(index)];
      monoQueueVal = [...monoQueueVal.slice(0, index), val, ...monoQueueVal.slice(index)];
      if (monoQueueVal.length > k) {
        monoQueueCount.pop();
        monoQueueVal.pop();
      }
    }
  }
  return monoQueueVal;
};
topKFrequent([1, 2], 2);
/*
Input
nums =
[4,1,-1,2,-1,2,3]
k =
2
10 / 21 testcases passed
Output
[-1,1,2,-1]
Expected
[-1,2]
*/