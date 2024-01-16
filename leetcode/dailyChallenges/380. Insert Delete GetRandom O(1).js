class RandomizedSet {
    constructor() {
        this.set = new Set();
        this.arr = [];
    }

    insert(val) {
        if (this.set.has(val)) {
            return false;
        }

        this.set.add(val);
        this.arr.push(val);

        return true;
    }

    remove(val) {
        if (!this.set.has(val)) {
            return false;
        }

        this.set.delete(val);

        // Swap the element to be removed with the last element in the array
        const lastElement = this.arr[this.arr.length - 1];
        const indexToRemove = this.arr.indexOf(val);
        this.arr[indexToRemove] = lastElement;
        this.arr.pop();

        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
    }
}

// Example usage:
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2 randomly
console.log(randomizedSet.remove(1)); // true
console.log(randomizedSet.insert(2)); // false
console.log(randomizedSet.getRandom()); // 2

// ✅  Beats 85.75% of users with JavaScript