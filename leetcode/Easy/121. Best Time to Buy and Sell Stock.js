const maxProfit=(prices)=>{
    let min=prices[0];
    let max=0;
    for(let i=1;i<prices.length;i++){
        min=Math.min(min,prices[i]);
        max=Math.max(max,prices[i]-min);
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([1,2])); // 1

// Time complexity: O(n)
// Space complexity: O(1)
// ✅ Hints: find the minimum price and the maximum profit