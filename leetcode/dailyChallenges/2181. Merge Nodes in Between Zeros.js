const mergeNodes = (head) => {
    let current = head;
    let count = 0;
    let zeroCount = 0;
    let firstZero = null;
    let lastZero = null;
    while (current) {
        if (current.val === 0) {
        if (zeroCount === 0) {
            firstZero = current;
        }
        lastZero = current;
        zeroCount++;
        } else {
        if (zeroCount > 0) {
            if (count === 0) {
            head = current;
            }
            count++;
        }
        }
        current = current.next;
    }
    if (zeroCount > 0) {
        if (firstZero === head) {
        head = lastZero;
        }
        lastZero.next = head;
        count += zeroCount;
    }
    return count;
    };

    console.log(mergeNodes([4, 0, 0, 2, 3, 0, 5, 0])); // 5
    console.log(mergeNodes([0, 0, 0, 0, 0])); // 0
    console.log(mergeNodes([1, 2, 3, 4, 5])); // 5

    // Time complexity: O(n)
    // Space complexity: O(1)
    // The time complexity is O(n) because we are iterating through the linked list once. The space complexity is O(1) because we are using a constant amount of space.