const minimumLength = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return right - left + 1;
        }
        let char = s[left];
        while (s[left] === char) {
            left++;
        }
        while (s[right] === char) {
            right--;
        }
    }
    return left > right ? 0 : 1;
};

console.log(minimumLength("ca"))//2
console.log(minimumLength("cabaabac"))//0
console.log(minimumLength("aabccabba"))//3

// time complexity is O(n)
// space complexity is O(1)
// ✅ Hints : Maintain two pointers and update one with a delay of n steps.