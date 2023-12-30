const mySqrt =(x) =>{
    let start =0;
    let end=x; // 9
    while(start<=end){
        let mid=Math.floor((start+end)/2); // 0+9/2=4.5=4
        let midSquare=mid*mid; // 4*4=16
        if(midSquare===x){ // 16===16
            return mid;
        }
        else if(midSquare<x){  // 16<9
            start = mid+1;
        }
        else{
            end=mid-1; 
        }
    }
    return end; // 2
}
console.log(mySqrt(8)); 
console.log(mySqrt(4));
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(9));

/*
Explaination:
Explaining it for input 8

Initialization:
01 start is initially set to 0.
end is initially set to 8.

Binary Search:
In the first iteration, mid is calculated as (0 + 8) / 2 = 4.
The square of mid is 4 * 4 = 16, which is greater than 8.
Since we are looking for the square root rounded down, we update end to mid - 1, so end becomes 3.
Second Iteration:

In the second iteration, start is still 0, and end is now 3.
mid is calculated as (0 + 3) / 2 = 1.
The square of mid is 1 * 1 = 1, which is less than 8.
We update start to mid + 1, so start becomes 2.
Third Iteration:

In the third iteration, start is now 2, and end is still 3.
mid is calculated as (2 + 3) / 2 = 2.
The square of mid is 2 * 2 = 4, which is less than 8.
We update start to mid + 1, so start becomes 3.
Fourth Iteration:

In the fourth iteration, start is now 3, and end is still 3.
mid is calculated as (3 + 3) / 2 = 3.
The square of mid is 3 * 3 = 9, which is greater than 8.
We update end to mid - 1, so end becomes 2.
Loop Ends:

The loop ends when start is no longer less than or equal to end.

Result:
At the end of the loop, end is the floor of the square root of 8, which is 2.
The function returns 2 as the output

Complexity
Time complexity: O(log(x)) // Binary Search
Space complexity: O(1)

*/

