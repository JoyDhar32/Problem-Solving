const exist = (board, word) => {
    const row = board.length;
    const col = board[0].length;
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const dfs = (i, j, index) => {
        if (index === word.length) return true;
        if (i < 0 || i >= row || j < 0 || j >= col) return false;
        if (visited[i][j] || board[i][j] !== word[index]) return false;
    
        visited[i][j] = true;
        for (const [x, y] of directions) {
        if (dfs(i + x, j + y, index + 1)) return true;
        }
        visited[i][j] = false;
        return false;
    };
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
        if (dfs(i, j, 0)) return true;
        }
    }
    
    return false;
    };

console.log((exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))); // true
console.log((exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))); // true
console.log((exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))); // false

    // time complexity is O(n * 3^l) where n is the number of cells in the board and l is the length of the word.
    // space complexity is O(n) where n is the number of cells in the board.
    // ✅ Hints: Backtracking