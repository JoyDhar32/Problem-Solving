const squareIsWhite = (coordinates) => {
    const [x, y] = coordinates.split("");
    return (x.charCodeAt(0) - 97 + +y) % 2 === 0;
    };
    console.log(squareIsWhite("a1")); // false
    console.log(squareIsWhite("h3")); // true
    console.log(squareIsWhite("c7")); // false
    console.log(squareIsWhite("f8")); // false
    console.log(squareIsWhite("e4")); // true

// ✅ Hint: separate the x and y coordinates and convert them to numbers.