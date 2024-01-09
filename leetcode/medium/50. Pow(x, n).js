// const myPow=(x,n)=>{
//     return Math.pow(x,n)
// }
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
        }

        x *= x;
        n = Math.floor(n / 2);
    }

    return result;
};

console.log(myPow(2.00000,10))//1024.00000
console.log(myPow(2.10000,3))//9.26100
console.log(myPow(2.00000,-2))//0.25000
console.log(myPow(0.00001,2147483647))//0.00000
console.log(myPow(1.00000,2147483647))//1.00000

//✅ Beats 90.45%of users with JavaScript