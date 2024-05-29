const countTriples = (n)=>{
    let count = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            let c = Math.sqrt(i * i + j * j);
            if (c <= n && c === Math.floor(c)) {
                count+=2;
            }
        }
    }
    return count;
}

console.log(countTriples(5)); // 2
console.log(countTriples(10)); // 4
console.log(countTriples(12)); // 4

// Time Complexity: O(n^2)
// Space Complexity: O(1) because we are not using any extra space
// ✅ Hints: using Math.sqrt() and Math.floor() functions