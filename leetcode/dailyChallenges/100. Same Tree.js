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
