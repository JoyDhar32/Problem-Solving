const findWinners = (matches) => {
    const losses = new Array(100001).fill(0);

    for (const [winner, loser] of matches) {
        if (losses[winner] === 0) {
            losses[winner] = -1;
        } 

        if (losses[loser] === -1) {
            losses[loser] = 1;
        } else {
            losses[loser]++;
        }
    }

    const zeroLoss = [];
    const oneLoss = [];

    for (let i = 1; i <= 100000; ++i) {
        if (losses[i] === -1) {
            zeroLoss.push(i);
        } else if (losses[i] === 1) {
            oneLoss.push(i);
        }
    }

    return [zeroLoss, oneLoss];
}

const matches1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.log(findWinners(matches1)); // Output: [[1,2,10],[4,5,7,8]]

const matches2 = [[2,3],[1,3],[5,4],[6,4]];
console.log(findWinners(matches2)); // Output: [[1,2,5,6],[]]

// Time Complexity: O(n)
// Space Complexity: O(n)

// ✅ Beats 98.13% of users with JavaScript