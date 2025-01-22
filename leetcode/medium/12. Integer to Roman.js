const intToRoman = (num) => {
    const roman = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    const keys = Object.keys(roman).reverse()
    let result = ''

    while (num > 0) {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            if (num >= key) {
                result += roman[key]
                num -= key
                break
            }
        }
    }

    return result
}

console.log(intToRoman(3))//"III"
console.log(intToRoman(1994))//"IV"

// time complexity: O(n)
// space complexity: O(1)

//✅ Beats 87.98% of users with JavaScript submissions