const sumsSubarrayMins = (arr) => {
    const mod = 10 ** 9 + 7;
    const stack = [];
    let sum = 0;
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        while (stack.length && stack[stack.length - 1][0] >= arr[i]) {
        const [val, times] = stack.pop();
        count += times;
        sum -= val * times;
        }
        stack.push([arr[i], count]);
        sum += arr[i] * count;
        result += sum;
    }
    return result % mod;
    };
    console.log(sumsSubarrayMins([3,1,2,4])); // 17
    console.log(sumsSubarrayMins([11,81,94,43,3])); // 444
    console.log(sumsSubarrayMins([71,55,82,55])); // 593
    console.log(sumsSubarrayMins([71,55,82,55,66,7,8,9,10,11,12,13,14,15,16,17,18,19,20])); // 593