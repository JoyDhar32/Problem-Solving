const checkIfExist = arr => {
    const set = new Set();
    for (let num of arr) {
        if (set.has(num * 2) || (num % 2 === 0 && set.has(num / 2))) {
            return true;
        }
        set.add(num);
    }
    return false;
};

// Test cases
console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([7, 1, 14, 11])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false

// Time Complexity: O(n) where n is the number of elements in the array
// Space Complexity: O(n) for the set

//✅ Hints: Use a set to store the elements of the array. For each element, check if its double or half exists in the set. If either condition is true, return true. Otherwise, add the element to the set and continue iterating through the array. If no such pair is found, return false.