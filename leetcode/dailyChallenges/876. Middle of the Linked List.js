const middleNode = (head) => {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
    };
    // Time Complexity: O(n)
    // 1. Initialize slow pointer to head and fast pointer to head.
    //  ✅Hints: Linked List