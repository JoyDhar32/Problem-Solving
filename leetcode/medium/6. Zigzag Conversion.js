const convert = (s, numRows) => {
    if (numRows === 1) return s;
    let rows = new Array(numRows).fill("");
    let n = s.length;
    let cycle = 2 * numRows - 2;
    for (let i = 0; i < n; i++) {
        let x = i % cycle;
        rows[Math.min(x, cycle - x)] += s[i];
    }
    return rows.join("");
    };

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints: find cycle, then append to the corresponding row

