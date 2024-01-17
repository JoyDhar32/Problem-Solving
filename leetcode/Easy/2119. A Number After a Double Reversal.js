const isSameAfterReversals = (num) => {
    if (num == 0) return true;
    let a = [];
    a = num.toString().split('');
    if (a[a.length - 1] == 0) return false;
    else return true;

}

console.log(isSameAfterReversals(123)); // Output: true
console.log(isSameAfterReversals(120)); // Output: false
console.log(isSameAfterReversals(0)); // Output: true
console.log(isSameAfterReversals(1)); // Output: true
console.log(isSameAfterReversals(111)); // Output: true

// ✅ Hints: check the last digit of the number. If it is 0, false or true.