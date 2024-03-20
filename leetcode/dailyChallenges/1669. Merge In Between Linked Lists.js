const mergeInBetween = (list1, a, b, list2) => {
    let start = list1;
    let end = list1;
    for (let i = 0; i < a - 1; i++) {
        start = start.next;
    }
    for (let i = 0; i < b; i++) {
        end = end.next;
    }
    start.next = list2;
    while (list2.next) {
        list2 = list2.next;
    }
    list2.next = end.next;
    return list1;
};

console.log(mergeInBetween([0,1,2,3,4,5], 3, 4, [1000000,1000001,1000002])); // [0,1,2,1000000,1000001,1000002,5]
console.log(mergeInBetween([0,1,2,3,4,5,6], 2, 5, [1000000,1000001,1000002])); // [0,1,1000000,1000001,1000002,6]


// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints : Use two pointers to find the start and end of the first list. Then, iterate through the second list and connect the start and end of the first list to the second list.