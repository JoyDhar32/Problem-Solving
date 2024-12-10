const countPrimeSetBits =(left,right)=>{
    let count = 0;
    const isPrime = (num) =>{
        if(num === 1) return false;
        if(num === 2) return true;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    for(let i = left; i <= right; i++){
        let bit = i.toString(2).split('').filter(i => i === '1').length;
        if(isPrime(bit)) count++;
    }
    return count;
}   

// Test cases
console.log(countPrimeSetBits(6, 10)); // 4
console.log(countPrimeSetBits(10, 15)); // 5

// Time Complexity: O(n * log(log(n))) where n is the number of elements in the range

// Space Complexity: O(1) since we are not using any extra space

//✅ Hints: Iterate through the range of numbers and count the number of set bits in the binary representation of each number. Check if the count is a prime number. If it is, increment the count of prime numbers. Return the count of prime numbers at the end.