const maximumNumberOfStringParis =(words) =>{
    let count = 0;
    const reversedSet = new Set();

    for (const word of words) {
        const reversedWord = word.split('').reverse().join('');

        if (reversedSet.has(reversedWord)) {
            count++;
            reversedSet.delete(reversedWord); // Each string can belong to at most one pair
        } else {
            reversedSet.add(word);
        }
    }

    return count;
}
console.log(maximumNumberOfStringParis(["cd","ac","dc","ca","zz"])); // 2
console.log(maximumNumberOfStringParis(["ab","ba","cc"])); // 1

// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 100% of users with JavaScript
