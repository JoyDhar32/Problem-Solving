// used: quick sort

const sortArray = (nums) => {
 
    const quickSort = (arr, left, right) => {
        if (left < right) {
            let pivot = partition(arr, left, right);
            quickSort(arr, left, pivot - 1);
            quickSort(arr, pivot + 1, right);
        }
    }
    
    const partition = (arr, left, right) => {
        let pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }
    
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

console.log(sortArray([5, 2, 3, 1])); // [1,2,3,5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]