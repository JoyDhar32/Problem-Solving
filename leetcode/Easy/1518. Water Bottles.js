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
