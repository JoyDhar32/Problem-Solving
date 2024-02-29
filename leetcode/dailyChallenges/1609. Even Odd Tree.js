const isEvenOddTree = (root) =>{
    if(!root) return true;
    let queue = [root];
    let level = 0;
    while(queue.length){
        let size = queue.length;
        let prev = level % 2 === 0 ? -Infinity : Infinity;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(level % 2 === 0){
                if(node.val % 2 === 0 || node.val <= prev) return false;
            }else{
                if(node.val % 2 !== 0 || node.val >= prev) return false;
            }
            prev = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        level++;
    }
    return true;
}

console.log(isEvenOddTree([1,10,4,3,null,7,9])); // true

// Time complexity: O(n)
// Space complexity: O(n)
// Hint:✅ BFS with level order traversal