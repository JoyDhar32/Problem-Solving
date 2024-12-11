const validSquare = (p1, p2, p3, p4) => {
    const dist = (p, q) => (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2;
    const dists = [dist(p1, p2), dist(p1, p3), dist(p1, p4), dist(p2, p3), dist(p2, p4), dist(p3, p4)].sort((a, b) => a - b);
    return dists[0] > 0 && dists[0] === dists[1] && dists[1] === dists[2] && dists[2] === dists[3] && dists[4] === dists[5];
};

// Time complexity: O(1)
// Space complexity: O(1)
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Valid Square.
