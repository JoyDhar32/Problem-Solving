const deckRevealedIncreasing = (deck) => {
    deck.sort((a, b) => a - b);
    const result = [deck.pop()];
    while (deck.length) {
        result.unshift(result.pop());
        result.unshift(deck.pop());
    }
    return result;
    };
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])) // [2,13,3,11,5,17,7]
console.log(deckRevealedIncreasing([1,2,3,4,5,6])) // [1,5,2,4,3,6]
console.log(deckRevealedIncreasing([1,2,3,4,5,6,7,8,9,10])) // [1,6,2,9,3,7,4,10,5,8]
// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: using sort and reverse approach