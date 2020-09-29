/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/
/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
  let eleHolder = null;
  let indexHolder = 0;

  let recursiveArrayChecker = function (array, indexHolder) {
    // Start loop
    // Compare current element to eleHolder
      // If current !== eleHolder, assign current to the eleHolder, continue Loop
    for (i = indexHolder; i <= array.length - 1; i++) {
      if (array[i] !== eleHolder) {
        eleHolder = array[i];
      } else if (array[i] === eleHolder) {
      // If current === eleHolder, it's a duplicate.
        // Check how many subsequent entries are the same duplicate
        // Start a new loop at the current index.
        // Use a counter to track duplicates
        // Contine until you reach an element that is not a duplicate. Return number of duplicates
        indexHolder = i; // index of first duplicate
        let duplicateCount = 1;
        for (j = i + 1; j <= array.length - 1; j++) {
          if (array[j] !== eleHolder) {
            // stop for loop when you encounter first non-duplicate
            break;
          } else if (array[j] === eleHolder) {
            duplicateCount++;
          }
        }
        // Splice out the duplicates from nums. Break
        array.splice(i, duplicateCount);
        // Restart parent loop from next index
        recursiveArrayChecker(array, indexHolder);
      }
    }
  }
  if (nums.length === 0) {
    return nums.length;
  }
  recursiveArrayChecker(nums, indexHolder);
  return nums.length;
};
console.log('test');
console.log(removeDuplicates([1,1,1,1,1,1,1,2]));