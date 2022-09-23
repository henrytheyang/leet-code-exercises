/*
Given an integer array nums of length n and an integer target, find three integers in nums 
such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
  // Two pointer approach, with binary search for mid
    // Optimize by skipping repeats in left, right, low, high
  let left = 0;
  let right = nums.length - 1;
  let answer = Infinity;
  let high, mid, low, cycleClosest, sum;
  let numsSorted = nums.sort((a, b) => a - b);

  while (left < right) {
    cycleClosest = Infinity
    low = left + 1;
    high = right - 1;
    while (high >= low) {
      mid = Math.floor((high + low)/2);
      sum = numsSorted[left] + numsSorted[mid] + numsSorted[right];
      if (sum === target) {
        return target;
      }
      if (Math.abs(target - sum) < Math.abs(target - answer)) answer = sum;
      if (Math.abs(target - sum) < Math.abs(target - cycleClosest)) cycleClosest = sum
      if (sum < target) low = mid + 1;
      else if (sum > target) high = mid - 1;
    }
    if (cycleClosest < target) {
      left++;
      while (nums[left] === nums[left - 1]) left++;
    }
    else if (cycleClosest > target) {
      right--;
      while (nums[right] === nums[right + 1]) right--;
    };
  }
  return answer;
}
threeSumClosest([-1,2,1,-4], 1);

 var threeSumClosestNaiveTwoPointer = function(nums, target) {
  // Have to scan all possibilities, and track closest to target
  // Sort, then iterate through nums, pinning first integer
    // Two pointer method to find other 2 integers
    // Skip if the second integer has been searched before
    // Skip once the sum moves further from target than prev 2 pointers

  let answer = Infinity;
  let prevSum = Infinity;
  let left, right;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    prevSum = Infinity;
    left = i + 1;
    right = nums.length - 1;
    if (nums[i] === nums[i - 1] && i > 0) continue; // Does nums[i - 1] need to exist

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === target) return target;
      if (Math.abs(target - answer) > Math.abs(target - (nums[i] + nums[left] + nums[right]))) {
        answer = nums[i] + nums[left] + nums[right];
      }
      // if (Math.abs(target - prevSum) < Math.abs(target - (nums[i] + nums[left] + nums[right]))) break;
      // prevSum = nums[i] + nums[left] + nums[right];
      if (nums[i] + nums[left] + nums[right] > target) right--;
      else if (nums[i] + nums[left] + nums[right] < target) {
        left++;
        while (nums[left] === nums[left - 1]) left++;
      }
    }
  }

  return answer;
};
threeSumClosest(
  [13,252,-87,-431,-148,387,-290,572,-311,-721,222,673,538,919,483,-128,-518,7,-36,-840,233,-184,-541,522,-162,127,-935,-397,761,903,-217,543,906,-503,-826,-342,599,-726,960,-235,436,-91,-511,-793,-658,-143,-524,-609,-728,-734,273,-19,-10,630,-294,-453,149,-581,-405,984,154,-968,623,-631,384,-825,308,779,-7,617,221,394,151,-282,472,332,-5,-509,611,-116,113,672,-497,-182,307,-592,925,766,-62,237,-8,789,318,-314,-792,-632,-781,375,939,-304,-149,544,-742,663,484,802,616,501,-269,-458,-763,-950,-390,-816,683,-219,381,478,-129,602,-931,128,502,508,-565,-243,-695,-943,-987,-692,346,-13,-225,-740,-441,-112,658,855,-531,542,839,795,-664,404,-844,-164,-709,167,953,-941,-848,211,-75,792,-208,569,-647,-714,-76,-603,-852,-665,-897,-627,123,-177,-35,-519,-241,-711,-74,420,-2,-101,715,708,256,-307,466,-602,-636,990,857,70,590,-4,610,-151,196,-981,385,-689,-617,827,360,-959,-289,620,933,-522,597,-667,-882,524,181,-854,275,-600,453,-942,134],
  -2805
);

/*
Input:
Input
[13,252,-87,-431,-148,387,-290,572,-311,-721,222,673,538,919,483,-128,-518,7,-36,-840,233,-184,-541,522,-162,127,-935,-397,761,903,-217,543,906,-503,-826,-342,599,-726,960,-235,436,-91,-511,-793,-658,-143,-524,-609,-728,-734,273,-19,-10,630,-294,-453,149,-581,-405,984,154,-968,623,-631,384,-825,308,779,-7,617,221,394,151,-282,472,332,-5,-509,611,-116,113,672,-497,-182,307,-592,925,766,-62,237,-8,789,318,-314,-792,-632,-781,375,939,-304,-149,544,-742,663,484,802,616,501,-269,-458,-763,-950,-390,-816,683,-219,381,478,-129,602,-931,128,502,508,-565,-243,-695,-943,-987,-692,346,-13,-225,-740,-441,-112,658,855,-531,542,839,795,-664,404,-844,-164,-709,167,953,-941,-848,211,-75,792,-208,569,-647,-714,-76,-603,-852,-665,-897,-627,123,-177,-35,-519,-241,-711,-74,420,-2,-101,715,708,256,-307,466,-602,-636,990,857,70,590,-4,610,-151,196,-981,385,-689,-617,827,360,-959,-289,620,933,-522,597,-667,-882,524,181,-854,275,-600,453,-942,134]
-2805
Output
-2806
Expected
-2805


*/