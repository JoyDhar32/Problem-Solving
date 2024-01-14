const removeTrailingZeros = (num) =>{
    let res = num.split('');
    let i = res.length - 1;
    while(res[i] === '0'){
        res.pop();
        i--;
    }
    return res.join('');    
}
console.log(removeTrailingZeros('123000')) // 123
console.log(removeTrailingZeros('10230000')) // 123

// 