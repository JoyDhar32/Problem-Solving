const hIndex = citations => {
    citations.sort((a, b) => b - a);
    let i = 0;
    while (i < citations.length && citations[i] > i) {
        i++;
    }
    return i;
    }

// Test Cases
console.log(hIndex([3, 0, 6, 1, 5])) //3
console.log(hIndex([1, 3, 1])) //1
console.log(hIndex([0])) //0

//Time Complexity O(n)
//Space Complexity O(1)
//✅ Hints: Sorting the array and comparing the elements with the index

/* Explanation:
- Sort the array in descending order.
- Traverse the array and compare the element with the index.
- If the element is greater than the index, increment the index.
- Return the index.
*/