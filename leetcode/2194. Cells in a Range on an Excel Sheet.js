const cellsInRange=(s) =>{
    const col1 = s[0].charCodeAt();
    const row1 = parseInt(s[1]);
    const col2 = s[3].charCodeAt();
    const row2 = parseInt(s[4]);

    const result = [];

    for (let col = col1; col <= col2; col++) {
        for (let row = row1; row <= row2; row++) {
            result.push(String.fromCharCode(col) + row);
        }
    }

    return result;
}
console.log(cellsInRange("A1:B2"))//["A1","A2","B1","B2"]
console.log(cellsInRange("A1:A5"))//["A1","A2","A3","A4","A5"]
console.log(cellsInRange("B1:B5"))//["B1","B2","B3","B4","B5"]
console.log(cellsInRange("A1:E1"))//["A1","B1","C1","D1","E1"]

// // Time Complexity: O(n)
// // Space Complexity: O(1)

// // ✅Beats 100%of users with JavaScript



