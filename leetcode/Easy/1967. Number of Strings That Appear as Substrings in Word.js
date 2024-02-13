const numOfStrings = (patterns, word) => {
    let count = 0;
    for (let pattern of patterns) {
        if (word.includes(pattern)) count++;
    }
    return count;
};
console.log(numOfStrings(["a","abc","bc","d"],"abc"));//3
console.log(numOfStrings(["a","abc","bc","d"],"ab"));//2
console.log(numOfStrings(["a","abc","bc","d"],"d"));//1

// Time Complexity: O(n*m)
// Space Complexity: O(1)
// ✅ Hints: Using Include Method

