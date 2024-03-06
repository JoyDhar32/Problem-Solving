const hasCycle = (head)=>{
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
}

// time complexity is O(n)
// space complexity is O(1)
// ✅ Hints : Using Floyd's Cycle-Finding Algorithm