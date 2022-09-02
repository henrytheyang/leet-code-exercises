/*
You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are 
standing at index 0, which is equal to '0'. You can move from index i to index j if the following conditions are fulfilled:

i + minJump <= j <= min(i + maxJump, s.length - 1), and
s[j] == '0'.
Return true if you can reach index s.length - 1 in s, or false otherwise.

 

Example 1:

Input: s = "011010", minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.
Example 2:

Input: s = "01101110", minJump = 2, maxJump = 3
Output: false
 

Constraints:

2 <= s.length <= 105
s[i] is either '0' or '1'.
s[0] == '0'
1 <= minJump <= maxJump < s.length
*/

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
  // DP
  // Mark all legal landing points from current
  // Decrement from end of string; skip if illegal landing point
  // Check if index 0 is within legal landing points; return true if yes
    // Else mark all legal landing points
  let legalLanding = new Array(s.length).fill(false);
  if (s[s.length - 1] !== '0') return false;
  let current = s.length - 1;
  let left = current - maxJump;
  legalLanding[current] = true;
  for (current; current >= 0 && current >= left; current--) {
    if (legalLanding[current] === false) continue;
    if (s[current] === '0') {
      if (current - maxJump <= 0 && current - minJump >= 0) return true;
      legalLanding.fill(true, current - maxJump, current - minJump + 1);
      left = current - maxJump;
    }
  }
  return false;
};
canReach("00111010", 3, 5);

/*
Input:
"00111010"
3
5
Output:
true
Expected:
false
*/


/*
var canReach = function(s, minJump, maxJump) {
  // DP
  // Decrement from rear, seeing how far you can push the possible jump window towards index 0
    // Look inside allowable jump window for a legal jump (value === 0)
    // If we find one update the window. If window includes index 0 return true
    // If we reach the end of the window, return false

  // Mark all legal landing points from current
  // Decrement from end of string; skip if illegal landing point
  // Check if index 0 is within legal landing points; return true if yes
    // Else mark all legal landing points
  if (s[s.length - 1] !== '0') return false;
  let left = s.length - 1 - maxJump;
  let right = s.length - 1 - minJump;
  let current = s.length - 1 - minJump;
  while (current >= left && current >= 0) {
    if (s[current] === '0') {
      if (current - maxJump <= 0 && current - minJump >= 0) return true;
      left = current - maxJump;
      right = current - minJump;
      current = current - minJump;
    } else {
      current--;
    }
  }
  return false;
};
*/