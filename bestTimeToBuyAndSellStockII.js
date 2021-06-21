/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging
multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e., max profit = 0.
 

Constraints:

1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // Capture all profit -making changes
  // Starting at i = 1, check each index to see if it's greater than the previous
  // Once you find an increase, track the starting point and keep iterating until you reach a decrease
  // Add the profit to the profit tracker
  let profit = 0;
  let buy = prices[0];
  let sell = undefined;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) { // found potential sell point
      sell = prices[i];
    } else if (prices[i] < buy && sell === undefined) { // Found lower buy point
      buy = prices[i];
    } else if (prices[i] < sell && sell !== undefined) { // Found local dip, sell here
      profit = profit + sell - buy;
      buy = prices[i];
      sell = undefined;
    }
    if (prices[i] > buy && i === prices.length - 1) { // Reached end of array w/ steady increases and no dropoff
      profit = profit + prices[i] - buy;
    }
  }
  // console.log(`profit = ${profit}`)
  return profit
};

maxProfit([7,1,5,3,6,4]);
// [1,2,3,4,5]
// [7,6,4,3,1]