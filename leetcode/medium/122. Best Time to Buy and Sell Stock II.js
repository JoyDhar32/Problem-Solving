const maxProfit = (prices) => {
    let prePrice=prices[0];
    let len=prices.length;
    let maximumProfit=0;
    for(let i=1;i<len;i++){
        if(prePrice<prices[i]){
            maximumProfit+=prices[i]-prePrice
        }
        prePrice=prices[i];
    }
    return maximumProfit;
}

console.log(maxProfit([7,1,5,3,6,4])) //7
console.log(maxProfit([1,2,3,4,5])) //4
console.log(maxProfit([7,6,4,3,1])) //0

// Time Complexity: O(n). Single pass.
// Space Complexity: O(1). Constant space required.
// ✅ Hints: Greedy Approach