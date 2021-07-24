/*
Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  // Iterate through nums1 and store values & # of occurences in object
  // Iterate through nums2 and check against value of storage object
    // If present, increment nums2 counter
  let tracker = {};
  let duplicates = [];
  for (let i = 0; i < nums1.length; i++) {
    if (tracker[nums1[i]] === undefined) {
      tracker[nums1[i]] = {};
      tracker[nums1[i]].nums1Counter = 1;
    } else {
      tracker[nums1[i]].nums1Counter++;
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    // We only care if the number has already shown up in nums1
    if (tracker[nums2[j]] !== undefined) {
      if (tracker[nums2[j]].nums2Counter === undefined) {
        tracker[nums2[j]].nums2Counter = 1;
        } else {
        tracker[nums2[j]].nums2Counter++;
      }
    }
  }

  // For each key value pair, push the Math.min of nums1, nums2 counter to answer array
  for (key in tracker) {
    if (tracker[key].nums2Counter) {
      let tempArray = new Array(Math.min(tracker[key].nums1Counter, tracker[key].nums2Counter));
      tempArray.fill(2)
      duplicates = [...duplicates, ...tempArray];
    }
  }

  return duplicates;
};

intersect([1,2,2,1], [2,2])