const wordPattern = (pattern, s) => {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    
    const map = new Map();
    const set = new Set();
    
    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];
    
        if (!map.has(p)) {
        if (set.has(w)) return false;
        map.set(p, w);
        set.add(w);
        } else {
        if (map.get(p) !== w) return false;
        }
    }
    
    return true;
    };

// ✅ Hint: