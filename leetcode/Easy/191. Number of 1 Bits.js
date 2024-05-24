const hammingWeight = (n) =>{
    let count = 0;
    while(n){
        count += n & 1; // n & 1 will give us the last bit of n
        n >>>= 1; // n >>> 1 will shift n to the right by 1
    }
    return count;
}

console.log(hammingWeight(11))//3
console.log(hammingWeight(128))//1
console.log(hammingWeight(4294967293))//31

// Time Complexity: O(1)
// Space Complexity: O(1) because we are not using any extra space
// ✅ Hints: This is a Bit Manipulation problem