const flipAndInvertImage = (image) => {
    return image.map((row) => {
        return row.reverse().map((cell) => {
        return cell === 1 ? 0 : 1;
        });
    });
    };

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); // [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])); // [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints: use two passes to flip and invert the image