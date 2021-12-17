// BEST TIME TO BUY AND SELL STOCKS USING DYNAMIC PROGRAMMING


const maxProfit = (prices: number[]): number => {
    const maxProfit = (prices: number[], start: number, end: number): number => {
        if (end - start < 2) {
            return 0;
        }
        let min = prices[start];
        let max = 0;
        for (let i = start; i < end; i++) {
            if (prices[i] < min) {
                min = prices[i];
            }
            if (prices[i] - min > max) {
                max = prices[i] - min;
            }
        }
        return max;
    }
    let max = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        const profit = maxProfit(prices, i, prices.length);
        if (profit > max) {
            max = profit;
        }
    }
    return max;
}
const prices = [1,2];
console.log(maxProfit(prices));