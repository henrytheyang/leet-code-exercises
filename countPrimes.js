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
  // Optimization- skip all multiples of things found notprime
  if (n < 3) return 0;
  let answer = 1;
  let primes = new Array(n).fill(true);
  [primes[0], primes[1]] = [false, false]
  for (let i = 3; i < n; i += 2) {
    if (primes[i] === false) continue;
    answer++;
    for (let j = 3; j < (n / i); j += 2) {
      primes[i * j] = false;
    }
  }
  return answer;
};

countPrimes(10);

/*
Input
n =
10
Output
2
Expected
4
*/
