var countDigits = function(num) {
    let originalNum = num;
        let count = 0;
    
        while (num > 0) {
            const digit = num % 10;
            if (digit !== 0 && originalNum % digit === 0) {
                count++;
            }
            num = Math.floor(num / 10);
        }
     return count;
    };
    console.log(countDigits(12)); // 2
    console.log(countDigits(1012)); // 3
    console.log(countDigits(23)); // 0
    console.log(countDigits(0)); // 0

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 95.33% of users with JavaScript