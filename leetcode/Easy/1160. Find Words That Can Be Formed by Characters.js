const countCharacters = (words, chars) => {
    const charCount = new Array(26).fill(0);
    for (let i = 0; i < chars.length; i++) {
        charCount[chars.charCodeAt(i) - 97]++;
    }
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordCount = new Array(26).fill(0);
        for (let j = 0; j < word.length; j++) {
        wordCount[word.charCodeAt(j) - 97]++;
        }
        let valid = true;
        for (let j = 0; j < 26; j++) {
        if (wordCount[j] > charCount[j]) {
            valid = false;
            break;
        }
        }
        if (valid) {
        count += word.length;
        }
    }
    return count;
    };

    console.log(countCharacters(["cat","bt","hat","tree"], "atach")); // 6
    console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr")); // 10
    console.log(countCharacters(["cat","bt","hat","tree"], "atach")); // 6

    // time complexity: O(n)
    // space complexity: O(1) because the size of the charCount and wordCount arrays is fixed at 26
    // ✅ Hint: using a fixed-size array to store the count of characters in the input strings | Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for Find Words That Can Be Formed by Characters.