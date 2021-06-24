/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

Constraints:

0 <= k <= 100
0 <= prices.length <= 1000
0 <= prices[i] <= 1000

*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(k, prices) {
  let profit = []; // 2D array, with k + 1 arrays for # transactions, with prices.length - 1 cells for profit for each possible sell day
  let maxProfitPerDay = new Array(prices.length).fill(0);
  let bestPrevProfitPerTrnxNumber = 0;
  if (prices.length === 0) {
    return 0;
  }
  profit.push(maxProfitPerDay);
  for (i = 1; i <= k; i++) { // Iterate through trnx number
    maxProfitPerDay = [0];
    bestPrevProfitPerTrnxNumber = 0;
    // Iterate through prices for each number of transations
    // Store profits per transaction number in an array, tracking max profit for each day;
    // Each day's profit will either be the profit from the day before, or (price of the day - day bought + (max profit of the day bought but with one less transaction))

    for (j = 1; j < prices.length; j++) { // Iterate through possible days of sale
      maxProfitPerDay[j] = maxProfitPerDay[j - 1];
      for (b = 0; b < j; b++) { // Iterate through day bought
        // Find max profit for each day buy iterating through all possible buy days 0 <= b < prices.length - 1;
        maxProfitPerDay[j] = Math.max(maxProfitPerDay[j], prices[j] - prices[b] + profit[i - 1][b]);
      }
    }
    profit.push(maxProfitPerDay);
  }
  // Max profit will be the number inside the last cell of the last array (last possible day of sale, of most transactions);
  console.log(`profit[k][prices.length - 1] = ${profit[k][prices.length - 1]}`)
  console.log(profit);
  return profit[k][prices.length - 1];
};

maxProfit(2,[5, 11, 3, 50, 60, 90]);
