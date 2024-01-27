const kInversePairs = (n, k) => {

    const per = 1e9 + 7;
    let jk = Array(k + 1).fill(0);

    for (let i = 1; i <= n; ++i) {
        const temp = Array(k + 1).fill(0);
        temp[0] = 1;

        for (let j = 1; j <= k; ++j) {
            const val = (jk[j] + per - ((j - i) >= 0 ? jk[j - i] : 0)) % per;
            temp[j] = (temp[j - 1] + val) % per;
        }

        jk = temp;
    }

    return ((jk[k] + per - (k > 0 ? jk[k - 1] : 0)) % per);
    
}
console.log(kInversePairs(3, 1)); // 2
console.log(kInversePairs(3, 0)); // 1
console.log(kInversePairs(3, 3)); // 1

// Time Complexity: O(n*k)
// Space Complexity: O(k)
// Hint: ✅Dynamic Programming
