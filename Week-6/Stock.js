var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {


        // The day we should buy at
        min = Math.min(min, prices[i - 1])


        // Check if selling at the current day gives us the most profit
        profit = Math.max(prices[i] - min, profit)
    }
    return profit
};


const stock = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(stock);

// TIME COMPLEXITY == O(N)
// SPACE COMPLEXITY === 0(1)