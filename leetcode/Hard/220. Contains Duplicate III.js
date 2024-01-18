const containsNearbyAlmostDuplicate = (nums, indexDiff, valueDiff) => {
    // for(let i=0;i<nums.length;i++) {
    //     for(let j =i+1;j<nums.length && j<=(i+indexDiff);j++) {
    //        if(Math.abs(nums[i]-nums[j]) <= valueDiff) {
    //           return true;
    //        }
    //     }
    // }

    // return false;
    if (indexDiff <= 0 || valueDiff < 0) {
        return false;
    }

    const bucket = new Map();

    for (let i = 0; i < nums.length; i++) {
        const bucketNum = Math.floor(nums[i] / (valueDiff + 1));

        if (
            bucket.has(bucketNum) ||
            (bucket.has(bucketNum - 1) && Math.abs(bucket.get(bucketNum - 1) - nums[i]) <= valueDiff) ||
            (bucket.has(bucketNum + 1) && Math.abs(bucket.get(bucketNum + 1) - nums[i]) <= valueDiff)
        ) {
            return true;
        }

        bucket.set(bucketNum, nums[i]);

        if (i >= indexDiff) {
            const leftmostBucket = Math.floor(nums[i - indexDiff] / (valueDiff + 1));
            bucket.delete(leftmostBucket);
        }
    }

    return false;
}

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)); // true
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)); // false

// ✅ Hints: Bucketing Approach