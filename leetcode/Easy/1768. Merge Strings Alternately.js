const mergeAlternately = (word1, word2) => {
    let result = '';
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        result += word1[i] + word2[i];
    }

    if (word1.length > word2.length) {
        result += word1.substring(minLength);
    } else {
        result += word2.substring(minLength);
    }

    return result;
    }
console.log(mergeAlternately('abc', 'pqr')); // apbqcr
console.log(mergeAlternately('ab', 'pqrs')); // apbqrs
console.log(mergeAlternately('abcd', 'pq')); // apbqcd
console.log(mergeAlternately('ab', 'pq')); // apbq

// ✅ Hints: find the minimum length of the two strings, iterate over the strings and add the characters to the result string. Then add the remaining characters from the longer string to the result string.