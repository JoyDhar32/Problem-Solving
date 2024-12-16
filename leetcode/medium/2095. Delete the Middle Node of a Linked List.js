class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const deleteMiddle = (head) => {
    if (!head || !head.next) return null; // If the list is empty or has only one node, return null

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next; // Remove the middle node
    return head;
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};

// Helper function to convert a linked list to an array
const linkedListToArray = (head) => {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
};

// Test case
let head = createLinkedList([1, 3, 4, 7, 1, 2, 6]);
head = deleteMiddle(head);
console.log(linkedListToArray(head)); // [1, 3, 4, 1, 2, 6]

// Time Complexity: O(n) where n is the number of nodes in the linked list
// Space Complexity: O(1) since we are using a constant amount of extra space
