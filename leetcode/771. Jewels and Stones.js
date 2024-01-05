const numJewelsInStones =(jewels, stones)=>{
    const jewelSet = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 96.25%of users with JavaScript