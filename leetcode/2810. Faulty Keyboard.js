const finalString = (s) => {
    let str = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            str = str.split('').reverse().join('');
        } else {
            str += s[i];
        }
    }

    return str;
}

console.log(finalString("abc"));
console.log(finalString("abciii"));
console.log(finalString("abciiidef"));
console.log(finalString("string"));
console.log(finalString("poiinter"));

//✅ Beat 55% of solutions on leetcode