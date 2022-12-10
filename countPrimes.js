/*
Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // Sieve of Eratosthenes
  // From 2 to n:
  // Iterate through integers, eliminating all multiples of each integer
  // At the end, go through the integers between 2 to n, counting the number of primes left
  let answer = 0;
  let primes = new Array(n).fill(true);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n/i; j++) {
      primes[i * j] = false;
    }
  }
  for (let k = 0; k < n; k++) {
    if (primes[k] === true) answer++;
  }
  return answer;
};

countPrimes(10);