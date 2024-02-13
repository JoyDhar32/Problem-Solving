const freqAlphabets = (s) => {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
        result += String.fromCharCode(96 + parseInt(s[i] + s[i + 1]));
        i += 2;
        } else {
        result += String.fromCharCode(96 + parseInt(s[i]));
        }
    }
    return result;
    };
    console.log(freqAlphabets("10#11#12"));//jkab
    console.log(freqAlphabets("1326#"));//acz
    console.log(freqAlphabets("25#"));//y