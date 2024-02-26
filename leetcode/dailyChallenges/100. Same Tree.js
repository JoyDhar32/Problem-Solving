const isSameTree = (p,q) =>{
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(isSameTree([1,2,3],[1,2,3])) // true
console.log(isSameTree([1,2],[1,null,2])) // false
console.log(isSameTree([1,2,1],[1,1,2])) // false
console.log(isSameTree([1,2,3],[1,2,3])) // true

// time complexity is O(n) where n is the number of nodes in the tree
// space complexity is O(n) where n is the number of nodes in the tree
//  ✅ Hint: The problem can be solved using recursion. The base case is when both trees are empty. If only one of the trees is empty, the trees are not the same. If both trees are not empty, compare the values of the nodes. If the values are not the same, the trees are not the same. Otherwise, compare the left and right subtrees.
