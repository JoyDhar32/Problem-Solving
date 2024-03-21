const reverseList = (head) =>{
    let prev = null;
    let current = head;
    let next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
console.log(reverseList([1,2,3,4,5])); // [5,4,3,2,1]
console.log(reverseList([1,2])); // [2,1]

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints : Use three pointers to reverse the linked list.