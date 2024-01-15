const sumOfUnique = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++;
            }
        }
        if(count === 1){
            sum += nums[i];
        }
    }
    
    return sum;
    }

    console.log(sumOfUnique([1,2,3,2])); // 4
    console.log(sumOfUnique([1,1,1,1,1])); // 0
    console.log(sumOfUnique([1,2,3,4,5])); // 15

    // time complexity: O(n)
    // space complexity: O(n)

    //  ✅ Hint: using nested loop
    // Iterate through the array and add the numbers that have a frequency of 1.