const furthestBuilding = (heights, bricks, ladders) => {
    const n = heights.length;
    const pq = new MaxHeap();
    let sum = 0;
    
    for (let i = 0; i < n - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            pq.push(diff);
            if (pq.size() > ladders) {
                sum += pq.pop();
                if (sum > bricks) return i;
            }
        }
    }
    
    return n - 1;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return max;
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(index) {
        let currentIdx = index;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx] <= this.heap[parentIdx]) break;
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
            currentIdx = parentIdx;
        }
    }

    heapifyDown(index) {
        let currentIdx = index;
        while (currentIdx < this.heap.length) {
            const leftIdx = 2 * currentIdx + 1;
            const rightIdx = 2 * currentIdx + 2;
            let largestIdx = currentIdx;

            if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largestIdx]) {
                largestIdx = leftIdx;
            }
            if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largestIdx]) {
                largestIdx = rightIdx;
            }

            if (largestIdx === currentIdx) break;

            [this.heap[currentIdx], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[currentIdx]];
            currentIdx = largestIdx;
        }
    }
}

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1)); // Output: 4
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)); // Output: 7
console.log(furthestBuilding([14, 3, 19, 3], 17, 0)); // Output: 3
