const makeFancyString = (s) => {
    let result = '';
    let count = 1;
    let prev = s[0];
    result += prev;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === prev) {
        count++;
        } else {
        count = 1;
        }
        if (count < 3) {
        result += s[i];
        }
        prev = s[i];
    }
    return result;
    };

console.log(makeFancyString('leeetcode'));//leetcode
console.log(makeFancyString('aaabaaaa'));//aabaa
console.log(makeFancyString('aab'));//aab