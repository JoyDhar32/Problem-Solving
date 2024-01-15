const sortSentence = (s) => {

    const words = s.split(' ');
    words.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    const originalWords = words.map(word => word.slice(0, -1));
    const result = originalWords.join(' ');

    return result;
}
console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
console.log(sortSentence("I1 love2 code4"));
// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 97.02%of users with JavaScript