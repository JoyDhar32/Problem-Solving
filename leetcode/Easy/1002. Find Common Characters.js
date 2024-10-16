const commonChars = (A) => {
    const result = [];
    const firstWord = A[0].split('');
    for (let i = 0; i < firstWord.length; i++) {
        const char = firstWord[i];
        if (A.every((word) => word.includes(char))) {
        result.push(char);
        A = A.map((word) => word.replace(char, ''));
        }
    }
    return result;
    };

console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))
console.log(commonChars(["a","b","c"]))
console.log(commonChars(["a","a","b"]))