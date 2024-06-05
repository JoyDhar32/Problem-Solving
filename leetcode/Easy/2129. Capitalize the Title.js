const capitalizeTitle = (title) => {
    const words = title.split(' ');
    const capitalizedWords = words.map((word) => {
        const firstLetter = word[0].toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return `${firstLetter}${rest}`;
    });
    return capitalizedWords.join(' ');
    };

    console.log(capitalizeTitle("the great gatsby")); // "The Great Gatsby"
    console.log(capitalizeTitle("the catcher in the rye")); // "The Catcher In The Rye"
    console.log(capitalizeTitle("to kill a mockingbird")); // "To Kill A Mockingbird"