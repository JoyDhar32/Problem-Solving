const findJudge = (n, trust) => {
    const trusted = new Array(n + 1).fill(0);
    for (const [a, b] of trust) {
        trusted[a]--;
        trusted[b]++;
    }
    for (let i = 1; i <= n; i++) {
        if (trusted[i] === n - 1) return i;
    }
    return -1;
    };
    console.log(findJudge(2, [[1,2]])); // 2
    console.log(findJudge(3, [[1,3],[2,3]])); // 3
    console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // -1
    console.log(findJudge(3, [[1,2],[2,3]])); // -1

    // Time complexity is O(n)
    // Space complexity is O(n)
    // ✅ Hints: using array to store the trust and untrust value