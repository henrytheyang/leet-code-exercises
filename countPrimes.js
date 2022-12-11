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
  // Optimization- only need to go up to i = n/2
  // Optimization- for j, after 2 only need to multiply by odd numbers
  let answer = 0;
  let primes = new Array(n).fill(true);
  [primes[0], primes[1]] = [false, false]
  for (let i = 2; i < n/2; i++) {
    primes[i * 2] = false;
    // odd integers starting with 3 = 2j + 1
    for (let j = 1; j < ((n / i) - 1) / 2; j++) {
      primes[i * (2 * j + 1)] = false;
    }
  }
  for (let k = 2; k <= n; k++) {
    if (primes[k] === true) answer++;
  }
  return answer;
};

countPrimes(10);