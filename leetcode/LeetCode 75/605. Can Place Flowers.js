const canPlaceFlowers = (flowerbed, n) => {
    let length=flowerbed.length;
    for(let i=0;i<length;i++){
        if(flowerbed[i]==0 && flowerbed[i-1] !=1 && flowerbed[i+1]!=1){  
            flowerbed[i]=1;
           n--;
    }
    }
    return n<=0;
}

console.log(canPlaceFlowers([1,0,0,0,1],1)); // Output: true
console.log(canPlaceFlowers([1,0,0,0,1],2)); // Output: false
console.log(canPlaceFlowers([0,0,1,0,0],1)); // Output: true
console.log(canPlaceFlowers([1,0,0,0,0,1],2)); // Output: false

// Time Complexity: O(n)
// Space Complexity : O(1)
// ✅ Hints: Iterate over the flowerbed array and check if the current position is empty and the previous and next positions are also empty. If so, plant a flower at the current position and decrement the number of flowers to plant. Finally, return whether the number of flowers to plant is less than or equal to zero.