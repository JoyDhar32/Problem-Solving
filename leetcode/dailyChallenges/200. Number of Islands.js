const numIslands = (grid)=>{
    if (!grid || grid.length === 0) {
        return 0;
    }

    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;

    const dfs = (row, col) => {
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0'; // Mark current cell as visited

        // Explore adjacent cells
        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    };

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j); // Explore the island
            }
        }
    }

    return count;    
}

// ✅ Hints : DFS