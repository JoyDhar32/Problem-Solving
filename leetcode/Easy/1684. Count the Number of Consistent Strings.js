const countConsistentStrings = (allowed, words) => {
    let count=0;
    for(let word of words){
        if(word.split('').every(char=>allowed.includes(char))) count++;
    }
    return count;
}

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]));
console.log(countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"]));
console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]));

// time complexity: O(n*m)
// space complexity: O(1)

// ✅Beats 92.22%of users with JavaScript






