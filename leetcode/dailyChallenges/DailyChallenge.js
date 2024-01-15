function findContentChildren(g, s) {
    g.sort((a, b) => a - b); // Sort the greed factors in ascending order
    s.sort((a, b) => a - b); // Sort the cookie sizes in ascending order
    
    let contentChildren = 0;
    let gIndex = 0;
    let sIndex = 0;
    
    while (gIndex < g.length && sIndex < s.length) {
        if (s[sIndex] >= g[gIndex]) {
            // If the current cookie size is sufficient for the current child's greed factor
            contentChildren++;
            gIndex++;
        }
        sIndex++;
    }
    
    return contentChildren;
}

// Example usage:
const example1 = findContentChildren([1, 2, 3], [1, 1]);
console.log("Example 1 Output:", example1); // Output: 1

const example2 = findContentChildren([1, 2], [1, 2, 3]);
console.log("Example 2 Output:", example2); // Output: 2
