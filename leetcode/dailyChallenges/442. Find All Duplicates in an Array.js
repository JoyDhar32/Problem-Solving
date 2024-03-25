const findDuplicates = (nums) => {
    let result = [];
    let set = new Set();
    for (let num of nums) {
        if(set.has(num)) {
            result.push(num);
        } else{
          set.add(num)
        }
    }
    return result;
    
}

console.log(findDuplicates([4,3,2,7,8,2,3,1])); // 

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints : Use a Set to find the Duplicate Numbers