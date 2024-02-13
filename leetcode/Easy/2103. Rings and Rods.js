var countPoints = function(rings) {
    const rods = new Array(10).fill(0);
  const colors = { R: 1, G: 2, B: 4 };

  for (let i = 0; i < rings.length; i += 2) {
    const color = colors[rings[i]];
    const rod = Number(rings[i + 1]);
    rods[rod] |= color;
  }

  let count = 0;
  for (const rod of rods) {
    if (rod === 7) { // 7 = R + G + B
      count++;
    }
  }

  return count;
}
console.log(countPoints("R2G3B4R5G6B7"));//1
console.log(countPoints("R2G3B4R5G6B7R8G9B1"));//2
console.log(countPoints("R2G3B4R5G6B7R8G9B1R2G3B4R5G6B7R8G9B1"));//4
// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Using Array