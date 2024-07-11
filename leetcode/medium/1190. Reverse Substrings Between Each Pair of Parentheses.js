const reverseParentheses = (s) => {
    const ref = [];
    let output = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            ref.push(output);
            output = '';
        } else if (s[i] === ')') {
            output = ref.pop() + output.split('').reverse().join('');
        } else {
            output += s[i];
        }
    }
    return output;
}
console.log(reverseParentheses("(abcd)")) // "dcba"
console.log(reverseParentheses("(u(love)i)")) // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")) // "leetcode"
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")) // "apmnolkjihgfedcbq"