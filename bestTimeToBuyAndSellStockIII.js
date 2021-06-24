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
  let left = [0];
  let right = [];
  let leftProfit = 0;
  let rightProfit = 0;
  let profit = 0;
  let buy = prices[0];
  let sell = prices[prices.length - 1];

  // Dividing line through possible transactions.
  // Iterate from the left to find greatest possible profit to the left of index, LEFT
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    leftProfit = Math.max(leftProfit, prices[i] - buy);
    left.push(leftProfit);
  }
  console.log(`left = ${left}`);
  // Iterate from the right to find the greatest possible profit to the left of the index, 
  for (j = prices.length - 1; j >= 0; j--) {
    if (prices[j] > sell) {
      sell = prices[j];
    }
    rightProfit = Math.max(rightProfit, sell - prices[j]);
    right[j] = rightProfit;
  }
  console.log(`right = ${right}`);
  // Iterate down LEFT and RIGHT to find greatest sum profit
  for (k = 0; k < prices.length; k++) {
    profit = Math.max(profit, left[k] + right[k]);
  }
  console.log(`profit = ${profit}`)
  return profit;
};

maxProfit([1,2,4,2,5,7,2,4,9,0]);
// [[1, 4], [2, 7], [2, 9]]
/*
Output:
12
Expected:
13
*/

// [1,2,4,2,5,7,2,4,9,0,1,10]
// [[1, 4], [2, 7], [2, 9], [1, 7]]
