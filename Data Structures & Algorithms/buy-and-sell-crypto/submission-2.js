class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // lets solve this tracking a min stock price and a max profit
        let minStock = prices[0]
        let maxProfit = 0

        // traverse days
        for(let i=1;i<prices.length;i++){
            // update minStock
            minStock = Math.min(minStock,prices[i])
            // update maxProfit
            maxProfit = Math.max(maxProfit,prices[i]-minStock)
        }

        return maxProfit
    }
}
