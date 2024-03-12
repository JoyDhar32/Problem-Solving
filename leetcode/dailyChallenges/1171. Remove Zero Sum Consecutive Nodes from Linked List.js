const removeZeroSumSublists = (head) => {
    const dummy = new ListNode(0);
    dummy.next = head;
    let sum = 0;
    const map = new Map();
    for (let i = dummy; i; i = i.next) {
        sum += i.val;
        map.set(sum, i);
    }
    sum = 0;
    for (let i = dummy; i; i = i.next) {
        sum += i.val;
        i.next = map.get(sum).next;
    }
    return dummy.next;
    };
console.log(removeZeroSumSublists([1,2,3,-3,4])); // [1,2,4]
console.log(removeZeroSumSublists([1,2,3,-3,-2])); // [1]
console.log(removeZeroSumSublists([1,2,3,-3,-2,-1])); // []
// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Using Link List