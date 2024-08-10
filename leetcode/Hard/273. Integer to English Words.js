const numberToWords = (num) => {
    if (num === 0) return 'Zero';
    const lessThan20 = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
        'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    const helper = (num) => {
        if (num === 0) return '';
        if (num < 20) return lessThan20[num] + ' ';
        if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
        return lessThan20[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
    };

    let res = '';
    for (let i = 0; i < thousands.length; i++) {
        if (num % 1000 !== 0) {
            res = helper(num % 1000) + thousands[i] + ' ' + res;
        }
        num = Math.floor(num / 1000);
    }
    return res.trim();
};

// Test Cases
console.log(numberToWords(123)) //One Hundred Twenty Three
console.log(numberToWords(12345)) //Twelve Thousand Three Hundred Forty Five
console.log(numberToWords(1234567)) //One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven