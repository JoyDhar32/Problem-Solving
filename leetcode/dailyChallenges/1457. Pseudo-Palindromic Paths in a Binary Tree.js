const pseudoPalindromicPaths = (root) => {
    let count = 0;
    const dfs = (node, path) => {
        if (!node) return;
        path ^= 1 << node.val;
        if (!node.left && !node.right) {
        if (path === 0 || (path & (path - 1)) === 0) count++;
        return;
        }
        dfs(node.left, path);
        dfs(node.right, path);
    };
    dfs(root, 0);
    return count;
    };
console.log(pseudoPalindromicPaths([2,3,1,3,1,null,1])); // 2
console.log(pseudoPalindromicPaths([2,1,1,1,3,null,null,null,null,null,1])); // 1
console.log(pseudoPalindromicPaths([9])); // 1

// Time Complexity: O(N)
// Space Complexity: O(N)

// ✅ Beat 88.90% of LeetCode Submissions