const combinationSum2 = (candidates, target) => {
    const res = [];
    candidates.sort((a, b) => a - b);
    const dfs = (start, path, target) => {
        if (target === 0) {
            res.push(path);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            if (candidates[i] > target) break;
            dfs(i + 1, [...path, candidates[i]], target - candidates[i]);
        }
    }

    dfs(0, [], target);
    return res;
}

// Test Cases
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1, 2, 2], [5]]
console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10)); // [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]