const isFacinating = (n) => {
    const concat = '' + n + (n * 2) + (n * 3);
    const set = new Set(concat);
    let output = ((concat.length === set.size) && !set.has('0'));
    return output;


}

console.log(isFacinating(192));//true
console.log(isFacinating(853));//true
console.log(isFacinating(123));//false
console.log(isFacinating(999));//false
console.log(isFacinating(100));//false

// Time Complexity: O(1)
// Space Complexity: O(1) because we are using a constant amount of space

//✅ Hints: '' + n + (n * 2) + (n * 3) is a way to concatenate the three numbers into a single string