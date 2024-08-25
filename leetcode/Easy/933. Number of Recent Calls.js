var RecentCounter = function() {
    this.requests = [];
}

RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    while (this.requests[0] < t - 3000) {
        this.requests.shift();
    }
    let len = this.requests.length;
    return len;
}


// Test cases
let rc = new RecentCounter();

// 1 request at time 1
console.log(rc.ping(1) === 1);

// 2 requests at time 100, 3001
console.log(rc.ping(100) === 2);

// 3 requests at time 3002, 3003, 3004
console.log(rc.ping(3001) === 3);



// Time complexity: O(1)
// Space complexity: O(1)
// ✅ Hints: Use queue to store the requests and remove the requests that are older than 3000 ms |Beats 82% JS submissions
