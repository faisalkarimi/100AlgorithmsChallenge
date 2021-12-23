// BEST TIME TO BUY AND SELL STOCK II 

const bestTimeToBuySellStock = (prices: number[]): number => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > 0) {
                maxProfit += profit;
                i = j;
                break;
            }
        }
    }
    return maxProfit;
}

console.log(bestTimeToBuySellStock([7,1,5,3,6,4]));
