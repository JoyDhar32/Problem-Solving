const heightChecker = (heights) => {
    const sorted = [...heights].sort((a, b) => a - b); // ([...heights]) is used to create a shallow copy of the heights array before sorting it
    console.log(sorted )
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
        count++;
        }
    }
    return count;
    };
    console.log(heightChecker([1,1,4,2,1,3])); // 3
    console.log(heightChecker([5,1,2,3,4])); // 5
    console.log(heightChecker([1,2,3,4,5])); // 0
    console.log(~~10.90);
    // time complexity: O(n)
    // space complexity: O(n)

// ✅  Hint: sorting array with sallow copy and compare with original array