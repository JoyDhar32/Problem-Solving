const maxProfit = (prices) => {
    let len = prices.length;
    let maximumProfit = 0;
    let left = 0;
    let right = 1;
    while (left < len) {
        if (prices[left] < prices[right]) {
            maximumProfit += prices[right] - prices[left]
        }
        left++;
        right++;
    }

    return maximumProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) //7
console.log(maxProfit([1, 2, 3, 4, 5])) //4
console.log(maxProfit([7, 6, 4, 3, 1])) //0

// Time Complexity: O(n). Single pass.
// Space Complexity: O(1). Constant space required.
// ✅ Hints: Two Pointer Approach