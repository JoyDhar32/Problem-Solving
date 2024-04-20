const findFarmland=(land) =>{
    const result = [];
    const rows = land.length;
    const cols = land[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (land[i][j] === 1) {
                let farmland = [i, j, i, j];
                dfs(land, i, j, farmland);
                result.push(farmland);
            }
        }
    }
    return result;

}

const dfs = (land, i, j, farmland) => {
    if (i < 0 || i >= land.length || j < 0 || j >= land[0].length || land[i][j] === 0) {
        return;
    }
    land[i][j] = 0;
    farmland[2] = Math.max(farmland[2], i);
    farmland[3] = Math.max(farmland[3], j);
    dfs(land, i + 1, j, farmland); // Down
    dfs(land, i - 1, j, farmland); // Up
    dfs(land, i, j + 1, farmland); // Right
    dfs(land, i, j - 1, farmland); // Left

}

console.log(findFarmland([[1,0,0],[0,1,1],[0,1,1]])) // [[0,0,0,0],[1,1,2,2]]
console.log(findFarmland([[1,1],[1,1]])) // [[0,0,1,1]]
console.log(findFarmland([[0]])) // []

// Time Complexity: O(N*M), where N is the number of rows and M is the number of columns in the input matrix.
// Space Complexity: O(1). We are not using any extra space.

// ✅ Hints : DFS
