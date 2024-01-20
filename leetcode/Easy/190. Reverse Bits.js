const reverseBits =(n) =>{
    let result = 0;
    for(let i = 0; i < 32; i++){
        result <<= 1;
        result += n & 1;
        n >>= 1;
    }
    return result >>> 0;
}

console.log(reverseBits(43261596)); // 964176192
console.log(reverseBits(4294967293)); // 3221225471
console.log(reverseBits(0)); // 0
console.log(reverseBits(1)); // 2147483648