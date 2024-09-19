const arrangeCoins = (n) => {
    let i = 1;
    while (n >= i) {
        n -= i;
        i++;
    }
    return i - 1;
}

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(10)); // 4.

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: just loop through the array and subtract the current number from the total number of coins until the total number of coins is less than the current number. Then return the current number minus 1.