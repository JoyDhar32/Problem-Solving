const interpret = (command) => {
    return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
}
console.log(interpret('G()(al)')); // Goal
console.log(interpret('G()()()()(al)')); // Gooooal
console.log(interpret('(al)G(al)()()G')); // alGalooG

// time complexity: O(N)
// space complexity: O(N)
// ✅ Single Line Code Using Regex