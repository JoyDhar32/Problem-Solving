const interpret = (command) => {
    let result = '';
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
        result += 'G';
        } else if (command[i] === '(' && command[i + 1] === ')') {
        result += 'o';
        } else if (command[i] === '(' && command[i + 1] === 'a') {
        result += 'al';
        }
    }
    return result;
    };
    console.log(interpret('G()(al)')); // Goal
    console.log(interpret('G()()()()(al)')); // Gooooal
    console.log(interpret('(al)G(al)()()G')); // alGalooG

    // time complexity: O(N)
    // space complexity: O(N)
    // ✅ No Special Functions