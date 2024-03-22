class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

const isPalindrome = (head) => {
    if (!head || !head.next) {
        return true;
    }

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = reverseList(slow);
    fast = head;
    while (slow) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
}

// Convert array to linked list
const arrayToLinkedList = (arr) => {
    let head = new ListNode();
    let current = head;
    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head.next;
}
console.log(isPalindrome([1,2,2,1])); // true
console.log(isPalindrome([1,2])); // false
console.log(isPalindrome([1,2,3,2,1])); // true

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints : Use two pointers to find the middle of the linked list.