const findBottomLeftValue = (root) =>{
    let maxDepth = -1;
    let leftMost = root.val;
    const dfs = (node, depth) => {
        if (!node) return;
        if (depth > maxDepth) {
            maxDepth = depth;
            leftMost = node.val;
        }
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };
    dfs(root, 0);
    return leftMost;
}
console.log(findBottomLeftValue([2, 1, 3])); // 1
console.log(findBottomLeftValue([1, 2, 3, 4, 5, 6, null, null, 7])); // 7
console.log(findBottomLeftValue([1, 2, 3, 4, 5, 6, null, null, 7, 8])); // 8
console.log(findBottomLeftValue([1, 2, 3, 4, 5, 6, null, null, 7, 8, 9])); // 9

// Time complexity: O(n)
// Space complexity: O(n)
// Hint:  ✅DFS