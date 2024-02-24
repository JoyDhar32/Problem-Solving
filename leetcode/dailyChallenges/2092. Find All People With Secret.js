const findAllPeople = (n,meetings,firstPerson) => {
    const uf = new UnionFind(n);
    uf.union(0, firstPerson);

    // Sort meetings by time
    meetings.sort((a, b) => a[2] - b[2]);

    for (let i = 0; i < meetings.length;) {
        const time = meetings[i][2];
        const unions = new Set();

        // Gather all meetings at the current time and temporarily union them
        while (i < meetings.length && meetings[i][2] === time) {
            const [x, y] = meetings[i];
            uf.union(x, y);
            unions.add(x);
            unions.add(y);
            i++;
        }

        // Check who knows the secret at this time frame
        const knowsSecret = new Set();
        for (const person of unions) {
            if (uf.find(person) === uf.find(0)) {
                knowsSecret.add(person);
            }
        }

        // Reset the unions except for those who know the secret
        for (const person of unions) {
            if (!knowsSecret.has(person)) {
                uf.reset(person);
            }
        }
    }

    // Collect all people who know the secret
    const secretHolders = [];
    for (let i = 0; i < n; i++) {
        if (uf.find(i) === uf.find(0)) {
            secretHolders.push(i);
        }
    }

    return secretHolders;
}

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
    }

    find(x) {
        if (x === this.parent[x]) {
            return x;
        }
        return this.parent[x] = this.find(this.parent[x]);
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootY] = rootX;
        }
    }

    reset(x) {
        this.parent[x] = x;
    }
}

console.log(findAllPeople(5,[[0,1],[1,2],[2,3],[3,4]],0)); // [0,1,2,3,4]