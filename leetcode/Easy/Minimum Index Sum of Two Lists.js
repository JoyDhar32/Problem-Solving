const findRestaurant = (list1, list2) => {
    const map = {};
    const result = [];
    let min = Infinity;
    list1.forEach((item, index) => {
        map[item] = index;
    });
    list2.forEach((item, index) => {
        if (map[item] !== undefined) {
        const sum = map[item] + index;
        if (sum < min) {
            min = sum;
            result.length = 0;
            result.push(item);
        } else if (sum === min) {
            result.push(item);
        }
        }
    });
    return result;
    };

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"])); // ["Shogun"]
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Burger King", "Tapioca Express", "Shogun"])); // ["KFC", "Burger King", "Tapioca Express", "Shogun"]
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"])); // ["KFC", "Burger King", "Tapioca Express", "Shogun"]

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hints: use a map to store the index of the first list, then iterate the second list to find the minimum index sum.