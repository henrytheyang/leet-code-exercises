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

lengthOfLIS([1,3,6,7,9,4,10,5,6]);
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

[-147,-171,-584,590,501,13,489,-938,396,-544,-229,697,157,-933,-264,-436,-691,-469,49,-574,694,50,672,-858,-923,974,-157,-507,-907,429,529,-591,802,-351,-606,296,-485,454,540,300,-1000,408,923,0,-975,-548,62,-990,835,650,733,-611,-385,-580,330,394,566,-191,612,-608,-478,-104,-425,58,-849,601,851,-208,-810,400,412,571,-535,-995,627,-481,-702,457,-29,375,792,-186,-921,-275,654,-356,-322,-28,-843,527,-266,-970,556,852,-890,169,-413,2,-958,-651,371,895,-994,671,243,-605,-556,735,-246,179,-104,-771,658,-554,932,-829,-455,-981,-731,-148,512,-547,-946,-997,-197,864,870,629,-961,659,574,543,-501,582,-799,-428,876,-334,115,759,197,-905,275,76,242,357,694,-254,-361,-338,-57,596,786,-710,-51,-496,-100,246,-969,874,504,938,931,-365,175,-40,-616,596,440,567,999,15,-363,-256,-578,-869,-653,78,-352,882,749,-33,462,-592,-751,761,-96,206,489,34,367,960,68,837,37,-764,-897,72,639,-69,353,836,-67,491,126,-171,-532,-757,-358,217,806,712,-32,843,-790,-691,-381,-138,6,-712,153,-184,-544,3,840,-561,917,-704,-126,-230,468,963,-993,445,-892,-543,941,-665,58,268,-362,181,-529,684,313,-380,-712,700,601,-962,-886,702,439,153,-87,140,583,-323,70,-460,-863,-859,-784,571,169,44,-460,181,883,600,982,-367,-191,815,-84,961,-791,-713,149,-499,330,-351,-442,-989,-662,-183,-220,-617,-638,-916,454,604,559,-304,-812,526,-891,984,-762,-669,-414,-481,-219,-776,690,-72,-250,-282,-961]