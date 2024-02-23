const findCheapestPrice = (n, flights, src, dst, k) => {
    const prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        const tmpPrices = prices.slice(); // Create a copy of prices array
        for (const [s, d, p] of flights) {
            if (prices[s] !== Infinity && prices[s] + p < tmpPrices[d]) {
                tmpPrices[d] = prices[s] + p;
            }
        }
        prices.splice(0, prices.length, ...tmpPrices); // Update prices array
    }

    return prices[dst] === Infinity ? -1 : prices[dst];
};

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)); // 500
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 2)); // 200
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 3)); // 200

// Time complexity is O(n * k)
// Space complexity is O(n)
// ✅ Hints: using array to store the prices