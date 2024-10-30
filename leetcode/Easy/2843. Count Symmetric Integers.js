const countSymmetricIntegers = (low, high) => {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (isSymmetric(i)) count++;
    }
    return count;
    };

const isSymmetric = (num) => {
    const str = num.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
};

console.log(countSymmetricIntegers(1, 100));//18
console.log(countSymmetricIntegers(1, 1000));//108
console.log(countSymmetricIntegers(1, 10000));//198