/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 
Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
Example 4:

Input: prices = [1]
Output: 0
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 105
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let profit = [0];
  let buy = prices[0];
  let sell = undefined;
  // Iterate right
  for (i = 1; i < prices.length; i++) {
    // When we find an increase, record it as a potential sell
    if (prices[i] > buy && sell === undefined) {
      sell = prices[i];
    // If the price decreases without a sell point use that as the new buy point
    } else if (prices[i] < buy && sell === undefined) {
      buy = prices[i];
    // If the price decreases below a sell point, use that as the sell price, record profit. Use the new index as a new buy
    } else if (prices[i] < sell) {
      profit.push(sell - buy);
      buy = prices[i];
      sell = undefined;
    }
    if (i === prices.length - 1 && sell) {
      profit.push(sell - buy);
    }
    if (profit.length > 2) {
      profit.sort((a, b) => b - a);
      profit.pop();
    }
  }
  console.log(profit)
  // Sum and return the two highest profit transactions
  return profit.reduce((accumulator, currentValue) => accumulator + currentValue);
};

maxProfit([3,3,5,0,0,3,1,4]);
/*
Output:
5
Expected:
6
*/