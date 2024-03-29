/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var threeSum = function(nums) {
  // Sort, then interate through nums and look for triplet using two pointers
  nums.sort((a, b) => a - b);
  let low, high, sum;
  let answer = [];

  for (let i = 0; i < nums.length - 2; i++) {
    low = i + 1;
    high = nums.length - 1;
    if (nums[i - 1] === nums[i]) continue;
    while (low < high) {
      sum = nums[i] + nums[low] + nums[high]
      if (sum === 0) {
        answer.push([nums[i], nums[low], nums[high]]);
        low++;
        while (nums[low] === nums[low - 1] && low < high) low++;
      }
      else if (sum > 0) high--;
      else low++;
    }
  }
  return answer;
}
threeSum([-1,0,1,2,-1,-4]);

var threeSumNestedLoopsFromMap = function(nums) {
  // Map values, iterate from map to eliminate repeats
  let answer = [];
  let duplicateTracker = {};
  let valuesPresent = new Map();
  let newTriplet = [];
  let stringifiedTriplet = '';
  let tripletFound = false;
  
  for (let i = 0; i < nums.length; i++) {
    if (valuesPresent.get(nums[i]) === undefined) valuesPresent.set(nums[i], 1);
    else valuesPresent.set(nums[i], valuesPresent.get(nums[i]) + 1);
  }

  for (const [key, value] of valuesPresent) {
    for (const [prop, count] of valuesPresent) {
      if (key === prop && valuesPresent.get(key) < 2) continue;
      if (valuesPresent.get(0 - key - prop) !== undefined) {
        if (key !== (0 - key - prop) && prop !== (0 - key - prop)) {
          tripletFound = true;
        }
        else if (key === 0 && prop === 0 && valuesPresent.get(0) >= 3) tripletFound = true;
        else if (key !== 0 && prop !== 0 && valuesPresent.get(0 - key - prop) > 1) tripletFound = true;

        if (tripletFound) {
          newTriplet = ([key, prop, 0 - key - prop]).sort((a, b) => a - b)
          stringifiedTriplet = JSON.stringify(newTriplet);
          if (duplicateTracker[stringifiedTriplet] === undefined) {
            answer.push([...newTriplet])
            duplicateTracker[stringifiedTriplet] = true;
          };
          tripletFound = false;
        }
      }
    }
  }
  return answer;
}

var threeSumFirst = function(nums) {
  // One pass solution with hashtable
  // Index of hashtable is value of nums[i]; value of hashtable[x] = index of nums[i] 
  // Iterate through nums, current num is fixed. Add to hashtable
    // Nested loop- check if current num in nested loop has complement
    // Add to hashtable
  let answer = [];
  let duplicateTracker = {};
  let valuesPresent = {};
  let newTriplet = [];
  let tripletFound = false;
  let finishedScanning = false;
  let stringifiedTriplet = '';
  valuesPresent[nums[0]] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!finishedScanning) {
        if (valuesPresent[nums[j]] == undefined) valuesPresent[nums[j]] = 1;
        else valuesPresent[nums[j]]++;
      }

      if (valuesPresent[0 - nums[i] - nums[j]] !== undefined) {
        if (0 - nums[i] - nums[j] !== nums[i] && 0 - nums[i] - nums[j] !== nums[j]) tripletFound = true;
        else if (nums[i] === 0 && nums[j] === 0 && valuesPresent[0 - nums[i] - nums[j]] >= 3) tripletFound = true;
        else if (nums[i] !== 0 && nums[j] !== 0 && valuesPresent[0 - nums[i] - nums[j]] > 1) tripletFound = true;

        if (tripletFound) {          
          newTriplet = ([nums[i], nums[j], 0 - nums[i] - nums[j]]).sort((a, b) => a - b)
          stringifiedTriplet = JSON.stringify(newTriplet);
          if (duplicateTracker[stringifiedTriplet] === undefined) {
            answer.push([...newTriplet])
            duplicateTracker[stringifiedTriplet] = true;
          };
        }
        tripletFound = false;
      };
    }
    finishedScanning = true;
  }
  return answer;
}


var threeSumBruteForce = function(nums) {
  let answerArray = [];
  let arraySortAsc = function (inputArr) {
    return inputArr.sort(function(a, b) {
      return a-b;
    });
  };
  let sortedInput = arraySortAsc(nums);
  let incrementToNextUnique = function (someNum) {
    do {
      someNum = someNum + 1;
    } while (sortedInput[someNum] === sortedInput[someNum - 1]);
    return someNum;
  };
  let decrementToNextUnique = function (someNum) {
    do {
      someNum = someNum - 1;
    } while (sortedInput[someNum] === sortedInput[someNum + 1]);
    return someNum;
  };
  // Iterate through sorted array
  // for (var i = 0; i < sortedInput.length - 2; i++) {
  for (var i = 0; sortedInput[i] <= 0; i++) {
    let a = i + 1;
    let z = sortedInput.length - 1;
    if (i > 0 && sortedInput[i] === sortedInput[i - 1]) {
      continue;
    }
    while (a < z) {
      if (sortedInput[i] + sortedInput[a] + sortedInput[z] === 0) {
        answerArray.push([sortedInput[i], sortedInput[a], sortedInput[z]]);
        console.log('new answerArray entry = ', [sortedInput[i], sortedInput[a], sortedInput[z]]);
        console.log('i = ', i);
        console.log('a = ', a);
        console.log('z = ', z);
        // Check again to see if (a < z) so they don't collide past each other
        if (a < z) {
          a = incrementToNextUnique(a);
          z = decrementToNextUnique(z);
        }
      } else if (sortedInput[i] + sortedInput[a] + sortedInput[z] < 0) {
        a = incrementToNextUnique(a);
      } else if (sortedInput[i] + sortedInput[a] + sortedInput[z] > 0) {
        z = decrementToNextUnique(z);   
      }
    }
  }
    // Add current element to first and last element of remaining number set
      // If the sum === 0, add the resulting set of numbers into the answer set
        // Continue through checking current first number sorted array
      // If the sum < 0, advance the second number one index place
      // If the sum > 0, decrease the third number one index place
      // Keep searching through sorted array using current first number while second number < third number
    // Edge case- dealing with duplicates. Anytime we advance 1st or 2nd, or decrease 3rd, if our new number === previous number, we skip 
  return answerArray;
};
