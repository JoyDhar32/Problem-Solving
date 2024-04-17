const smallestFromLeaf = (root) => {
    const dfs = (node, path) => {
        if(node === null) return;

        path = String.fromCharCode(node.val + 97) + path;

        if(node.left === null && node.right === null){
            if(path < smallest) smallest = path;
        }

        dfs(node.left, path);
        dfs(node.right, path);
    }

    let smallest = '{';
    dfs(root, '');

    return smallest;
}

console.log(smallestFromLeaf([0,1,2,3,4,3,4])); // dba
console.log(smallestFromLeaf([25,1,3,1,3,0,2])); // adz

// Time Complexity: O(N), where N is the number of nodes in the tree.
// Space Complexity: O(N), where N is the number of nodes in the tree. This space is occupied by the recursion stack.
// ✅ Hints : Binary Tree