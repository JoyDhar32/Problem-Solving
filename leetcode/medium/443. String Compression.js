const compress = (chars) => {
    let count = 1;  // 1 
    let total = 0; // 0
    let length = chars.length;  // To get the length of the array
    for (let i = 0; i < length; i++) {  // to iterate through the array 
        if (chars[i] === chars[i + 1]) { // if the current element is equal to the next element
            count++; // increment the count
        }
        else {
            chars[total] = chars[i];    // assign the current element to the total index of the array
            total++;    // increment the total index
            {
                if (count > 1) {    // if the count is greater than 1 
                    count.toString().split('').forEach(n => {   // convert the count to string and split it into an array of characters and iterate through it 
                        chars[total] = n;   // assign the character to the total index of the array 
                        total++;    // increment the total index 
                    }) 
                }
                count = 1;  // reset the count to 1 
            }
        }
    }
    return total;   // return the total index 
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])) //6
console.log(compress(["a"])) //1
console.log(compress(["a ", "b", "c"])) //3
console.log(compress(["a", "b", "c"])) //3


// Time Complexity: O(n). 
// Space Complexity: O(1).
// ✅ Hints: Two Pointer Approach
