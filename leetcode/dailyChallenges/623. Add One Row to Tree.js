const addOneRow = (root, val, depth) => {
    if(depth === 1){
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    const dfs = (node, level) => {
        if(node === null) return;

        if(level === depth - 1){
            const left = new TreeNode(val);
            left.left = node.left;
            node.left = left;

            const right = new TreeNode(val);
            right.right = node.right;
            node.right = right;

            return;
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 1);

    return root;
}

console.log(addOneRow([4,2,6,3,1,5], 1, 2)); // [4,1,1,2,null,null,6,3,1,5]
console.log(addOneRow([4,2,null,3,1], 1, 3)); // [4,2,null,1,1,3,null,null,1]

// Time Complexity: O(N), where N is the number of nodes in the tree.
// Space Complexity: O(N), where N is the number of nodes in the tree. This space is occupied by the recursion stack.
// ✅ Hints : Binary Tree