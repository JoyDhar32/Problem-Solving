const sumNumbers = (root) => {
    if(root === null) return 0;

    let sum = 0;

    const dfs = (node, num) => {
        if(node === null) return;

        num = num * 10 + node.val;

        if(node.left === null && node.right === null){
            sum += num;
            return;
        }

        dfs(node.left, num);
        dfs(node.right, num);
    }

    dfs(root, 0);

    return sum;
}

console.log(sumNumbers([1,2,3])); // 25
console.log(sumNumbers([4,9,0,5,1])); // 1026
console.log(sumNumbers([])); // 0

// Time Complexity: O(N), where N is the number of nodes in the tree.
// Space Complexity: O(N), where N is the number of nodes in the tree. This space is occupied by the recursion stack.
// ✅ Hints : Binary Tree