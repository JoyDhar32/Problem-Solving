const interpret = (command) => {
    return command.split('()').join('o').split('(al)').join('al');
}
console.log(interpret('G()(al)')); // Goal
console.log(interpret('G()()()()(al)')); // Gooooal
console.log(interpret('(al)G(al)()()G')); // alGalooG

// time complexity: O(N)
// space complexity: O(N)
// ✅ Using Split and Join