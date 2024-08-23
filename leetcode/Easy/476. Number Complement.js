const findComplement = (num) => {
    let mask = 1;
    while (mask < num) mask = (mask << 1) + 1;
    return num ^ mask;
}

console.log(findComplement(5)) // 2
console.log(findComplement(1)) // 0
console.log(findComplement(10)) // 5

// Time complexity: O(1)
// Space complexity: O(1)
// ✅ Hints: Use XOR operation with mask |Beats 100% JS submissions 