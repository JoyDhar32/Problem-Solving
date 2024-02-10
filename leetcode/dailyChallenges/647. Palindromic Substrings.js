const countSubstrings = (s) =>{
    let count = 0;
    for(let i = 0; i < s.length; i++){
        count += expandAroundCenter(s, i, i);
        count += expandAroundCenter(s, i, i+1);
    }
    return count;
}

const expandAroundCenter = (s, left, right) =>{
    let count = 0;
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
        count++;
    }
    return count;
}

console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6
console.log(countSubstrings("abba")); // 6

// Time Complexity: O(n^2)
// Space Complexity: O(1)
//✅ Hint: Dynamic Programming