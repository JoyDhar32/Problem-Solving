
const furthestBuilding =(heights, bricks, ladders) => {
       
    const heap = new PriorityQueue({compare:(a,b)=>{
        return a-b
    }})

    let prevHeight = heights[0]
    let sum = 0

    for(let i=1;i<heights.length;i++){

        const height = heights[i]

        const diff = height-prevHeight

        if(diff>0){
            heap.enqueue(diff)
        }
        
        if(heap.size()>ladders){
            sum+=heap.dequeue()
        }

        if(sum>bricks){
            return i-1
        }

        prevHeight = height
    }

    return heights.length-1 
};
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)); // Output: 7
console.log(furthestBuilding([14, 3, 19, 3], 17, 0)); // Output: 3
