const sumOfLeftLeaves = (root)=>{

    if(root === null) return 0;

    let sum = 0;

    if(root.left !== null && root.left.left === null && root.left.right === null){
        sum += root.left.val;
    }

    sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);

    return sum;
}





console.log(sumOfLeftLeaves([3,9,20,null,null,15,7])); // 24
console.log(sumOfLeftLeaves([1])); // 0
console.log(sumOfLeftLeaves([])); // 0

// Time Complexity: O(N), where N is the number of nodes in the tree.
// Space Complexity: O(N), where N is the number of nodes in the tree. This space is occupied by the recursion stack.
// ✅ Hints : Binary Tree

