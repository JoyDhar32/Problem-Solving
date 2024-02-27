const diameterOfBinaryTree = (root) => {
    let max = 0;
    const dfs = (node) => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    };
    dfs(root);
    return max;
    }
console.log(diameterOfBinaryTree([1,2,3,4,5])); // 3
console.log(diameterOfBinaryTree([1,2])); // 1
console.log(diameterOfBinaryTree([1,2,3])); // 2
console.log(diameterOfBinaryTree([1,2,3,4,5])); // 3

    // Time complexity: O(n)
    // Space complexity: O(n)
    // Hint:  ✅DFS

