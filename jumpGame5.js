/*
Given an array of integers arr and an integer d. In one step you can jump from index i to index:

i + x where: i + x < arr.length and 0 < x <= d.
i - x where: i - x >= 0 and 0 < x <= d.

In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] for all indices
k between i and j (More formally min(i, j) < k < max(i, j)).

You can choose any index of the array and start jumping. Return the maximum number of indices you can visit.
Notice that you can not jump outside of the array at any time.

Example 1:
Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
Output: 4
Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 > 9.
You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
Similarly You cannot jump from index 3 to index 2 or index 1.

Example 2:
Input: arr = [3,3,3,3,3], d = 3
Output: 1
Explanation: You can start at any index. You always cannot jump to any index.

Example 3:
Input: arr = [7,6,5,4,3,2,1], d = 1
Output: 7
Explanation: Start at index 0. You can visit all the indicies. 
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 105
1 <= d <= arr.length
*/

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  // Memo solution
  // Max jumps for each index is either 1) previous max or 2) 1 + max jumps of the biggest index in range
  // Recursively calculate max jumps for each index within d of the index, memozing each
  let result = 0;
  let memo = new Array(arr.length);
  const jumpCalcHelper = (currIndex) => {
    if (memo[currIndex] !== undefined) return memo[currIndex];
    memo[currIndex] = 1;
    for (let j = currIndex + 1; j <= currIndex + d && j < arr.length && arr[j] < arr[currIndex]; j++) {
      memo[currIndex] = Math.max(memo[currIndex], 1 + jumpCalcHelper(j));
    }
    for (let k = currIndex - 1; k >= currIndex - d && k >= 0 && arr[k] < arr[currIndex]; k--) {
      memo[currIndex] = Math.max(memo[currIndex], 1 + jumpCalcHelper(k));
    }
    return memo[currIndex];
  };

  for (let i = 0; i < arr.length; i++) {
    result = Math.max(result, jumpCalcHelper(i));
  }
  return result;
};
maxJumps([6,4,14,6,8,13,9,7,10,6,12], 2);
/*
Input
[6,4,14,6,8,13,9,7,10,6,12], 2
Output
5
Expected
4
*/