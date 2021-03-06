// Example 1:
// Input: 
// asteroids = [5, 10, -5]
// Output: [5, 10]
// Explanation: 
// The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

// Example 2:
// Input: 
// asteroids = [8, -8]
// Output: []
// Explanation: 
// The 8 and -8 collide exploding each other.

// Example 3:
// Input: 
// asteroids = [10, 2, -5]
// Output: [10]
// Explanation: 
// The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.

// Example 4:
// Input: 
// asteroids = [-2, -1, 1, 2]
// Output: [-2, -1, 1, 2]
// Explanation: 
// The -2 and -1 are moving left, while the 1 and 2 are moving right.
// Asteroids moving the same direction never meet, so no asteroids will meet each other.


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function (asteroids) {
  // debugger
  let answer = [];
  let copyOfInput = asteroids.slice();
  // optimization - pass in the index where we stopped, decrement
    // and start from there instead of beginning
    // this 'optimization' is slower?! 148ms vs 136ms without it
  let detectionStartingIndex = 0;
  let detectCollision = (someArr, startingIndex) => {
    if (someArr.length === 0) {
      answer = someArr;
    } else if (someArr.length === 1) {
      answer = someArr;
    } else {
      for (var i = startingIndex; i < (someArr.length - 1); i++) {
        if (someArr[i] > 0 && someArr[i + 1] < 0 && someArr.length > 1) {
          let postCollisionArr = compareAndAnnihilate(someArr, [someArr[i], i], [someArr[i + 1], i + 1]);
          if (i === 0) {
            startingIndex = 0;
          } else {
            startingIndex = i - 1;
          }
          detectCollision(postCollisionArr, startingIndex);
        } else {
          answer = someArr;
        }
      }
    }
  };
  let compareAndAnnihilate = (currentAsteroidField, asteroid1Info, asteroid2Info) => {
    if (Math.abs(asteroid1Info[0]) > Math.abs(asteroid2Info[0])) {
      currentAsteroidField.splice(asteroid2Info[1], 1);
    } else if (Math.abs(asteroid1Info[0]) < Math.abs(asteroid2Info[0])) {
      currentAsteroidField.splice(asteroid1Info[1], 1);
    } else if (Math.abs(asteroid1Info[0]) === Math.abs(asteroid2Info[0])) {
      currentAsteroidField.splice(asteroid1Info[1], 2);
    }
    // return array
    return currentAsteroidField;
  };
  detectCollision(copyOfInput, detectionStartingIndex);
  return answer;
};