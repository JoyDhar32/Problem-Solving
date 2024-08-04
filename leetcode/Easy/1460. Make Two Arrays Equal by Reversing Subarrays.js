const canBeEqual = (target, arr) => {
    let len1 = target.length;
    let len2 = arr.length;
    if (len1 != len2) return false;
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < len1; i++) {
        if (target[i] != arr[i]) return false;
    }
    return true;
}

// Test Cases
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])) //true
console.log(canBeEqual([7], [7])) //true
console.log(canBeEqual([1, 12], [12, 1])) //true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])) //false
console.log(canBeEqual([1, 12], [12, 1])) //true


//Time Complexity O(n)
//Space Complexity O(1)
//✅ Hints: Sorting the array and comparing the elements
