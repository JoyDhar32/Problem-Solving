const numWaterBottles = (numBottles, numExchange) => {
    let res = numBottles;

    while(numBottles >= numExchange){
        let reminder = numBottles % numExchange;
        numBottles = Math.floor(numBottles/numExchange);
        res += numBottles;
        numBottles += reminder;
    }
    return res;
};

// Another approach
const numWaterBottles2 = (numBottles, numExchange) => {
    let total = numBottles;
    let temp = numBottles;
    while (temp >= numExchange) {
        const exchange = Math.floor(temp / numExchange);
        total += exchange;
        temp = exchange + (temp % numExchange);
    }
    return total;
};



console.log(numWaterBottles(9, 3)); // 13
console.log(numWaterBottles(15, 4)); // 19
console.log(numWaterBottles(5, 5)); // 6
console.log(numWaterBottles(2, 3)); // 2

console.log('-----------------');

console.log(numWaterBottles2(9, 3)); // 13
console.log(numWaterBottles2(15, 4)); // 19
console.log(numWaterBottles2(5, 5)); // 6
console.log(numWaterBottles2(2, 3)); // 2

// time complexity: O(log n)
// space complexity: O(1)
// ✅ Hint: Math Calculation (Division) 2 approaches

/* Explanation:
Step-by-Step Execution for Input 15 and 4:
Initial State:

numBottles = 15
numExchange = 4
res = 15
First Iteration:

reminder = 15 % 4 = 3
numBottles = Math.floor(15 / 4) = 3
res = 15 + 3 = 18
numBottles = 3 + 3 = 6
Second Iteration:

reminder = 6 % 4 = 2
numBottles = Math.floor(6 / 4) = 1
res = 18 + 1 = 19
numBottles = 1 + 2 = 3
Third Iteration:

numBottles < numExchange, the loop terminates.
Final Result:
res = 19
Thus, with 15 initial full bottles and an exchange rate of 4 empty bottles for 1 full bottle, you can drink a total of 19 bottles.
*/