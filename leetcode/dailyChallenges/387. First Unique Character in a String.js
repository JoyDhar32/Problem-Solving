const firstUniqChar =(s)=>{
    let obj = {};
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]]){
            obj[s[i]]++;
        }else{
            obj[s[i]] = 1;
        }
    }
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]] === 1){
            return i;
        }
    }
    return -1;
}
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1

// time complexity is O(n) and space complexity is O(1) because the object will have at most 26 keys
// ✅ Hints : Use an object to store the frequency of each character. Then, iterate through the string and return the index of the first character with a frequency of 1. If no such character is found, return -1.