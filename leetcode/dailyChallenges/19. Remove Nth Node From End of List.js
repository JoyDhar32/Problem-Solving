const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};  

console.log(removeNthFromEnd([1,2,3,4,5], 2))//[1,2,3,5]
console.log(removeNthFromEnd([1], 1))//[]
console.log(removeNthFromEnd([1,2], 1))//[1]

// time complexity is O(n)
// space complexity is O(1)
// ✅ Hints : Maintain two pointers and update one with a delay of n steps.