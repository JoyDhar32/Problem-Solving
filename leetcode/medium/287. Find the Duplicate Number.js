const findDuplicate = (nums) => {
    let set = new Set();
    for(let num of nums){
        if(set.has(num)) return num;
        else{
            set.add(num);
        }
    }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([1, 1])); // 1

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints : Use a set to store the numbers that have been seen before. If a number is already in the set, return it.