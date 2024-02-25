var canTraverseAllPairs = function (nums) {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313];
    let uf = new Array(nums.length).fill(-1);
    let primeIdxs = {};

    let find = i => uf[i] < 0 ? i : find(uf[i]);

    nums.forEach((num, i) => {
        let primeFactors = [];
        for (let p of primes) {
            if (num % p === 0) {
                primeFactors.push(p);
                while (num % p === 0)
                    num = Math.floor(num / p);
            }
        }

        if (num !== 1) primeFactors.push(num);

        for (let factor of primeFactors) {
            if (factor in primeIdxs) {
                let pi = find(i);
                let pj = find(primeIdxs[factor]);
                if (pi !== pj) {
                    if (uf[pi] > uf[pj]) [pi, pj] = [pj, pi];
                    uf[pi] += uf[pj];
                    uf[pj] = pi;
                }
            } else primeIdxs[factor] = i;
        }
    })

    return Math.abs(Math.min(...uf)) === nums.length;
};
    console.log(canTraverseAllPairs([2, 3, 4, 6])); 
    console.log(canTraverseAllPairs([1, 2, 3, 4])); // true
    // Time Complexity: O(n * log(max(nums)))