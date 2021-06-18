/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let profit = 0;
  let buyPrice = prices[0];
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      // profit = prices[i] - buyPrice > profit ? prices[i] - buyPrice : profit // 100ms, 96, 100, 88, 92
      profit = Math.max(profit, prices[i] - buyPrice); // 80ms, 100, 92, 92, 92
    }
  }
  return profit;
};

maxProfit([2,1,2,0,1]);
/*
Output
2
Expected
1
*/