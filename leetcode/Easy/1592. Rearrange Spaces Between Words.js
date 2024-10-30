const reorderSpaces = (text) => {
    const words = text.split(' ').filter(Boolean);
    const spaces = text.split(/[a-z]/i).filter(Boolean);
    const totalSpaces = spaces.length;
    const totalWords = words.length;
    const spacesBetweenWords = totalWords > 1 ? Math.floor(totalSpaces / (totalWords - 1)) : 0;
    const remainingSpaces = totalWords > 1 ? totalSpaces % (totalWords - 1) : totalSpaces;
    const result = words.join(' '.repeat(spacesBetweenWords));
    return result + ' '.repeat(remainingSpaces);
};

console.log(reorderSpaces("  this   is  a sentence "));//"this   is   a   sentence"
console.log(reorderSpaces(" practice   makes   perfect"));//"practice   makes   perfect "
console.log(reorderSpaces("hello   world"));//"hello   world"

// Time Complexity: O(n)
// Space Complexity: O(n) because we are using extra space to store the result
// ✅ Hints: use the Date object to get the day of the week for the specified date