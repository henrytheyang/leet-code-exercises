/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,3,0,0], your answer will be accepted.
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0
  }
  // Two pointers, one at the front and one at the rear
  let front = 0;
  let rear = nums.length - 1;
  // Start scanning array from the beginning of array
  while (front <= rear) {
    if (nums[front] !== val) {
      front++;
      continue;
    } else {
      // When you find val, start scanning from the rear of the array for a value that's NOT VAL
        // If you encounter val before NOT VAL, pop it off
        // Once you find NOT VAL, use it to substitute the front pointer value
        // Pop the consumed NOT VAL off the rear of the array
        // Update pointers
      // Edge case- front pointer reaches end of array and that value is val; don't scan from rear, just pop
      if (front === rear && nums[front] === val) {
        nums.pop();
        return nums.length;
      }
      for (i = rear; i > front; i--) {
        if (nums[i] === val) {
          nums.pop();
        } else {
          nums[front] = nums[i];
          nums.pop();
          rear = i - 1;
          front++;
          break;
        }
      }
    }
  }
  return nums.length;
};

removeElement([3,2,2,3], 3);