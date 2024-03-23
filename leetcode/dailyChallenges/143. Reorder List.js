var reorderList = function (head) {
    let stack = [], node = head
    if (!node) return
    while (node) {
      stack.push(node)
      node = node.next
    }
    let len = stack.length
    node = head
    for (let i = 0; i < len; i++) {
      if (i % 2 == 0)
        node.next = stack.shift()
      else
        node.next = stack.pop()
      node = node.next
    }
    node.next = null
  };

  console.log(reorderList([1,2,3,4])); // [1,4,2,3]
    console.log(reorderList([1,2,3,4,5])); // [1,5,2,4,3]
    console.log(reorderList([1,2,3,4,5,6])); // [1,6,2,5,3,4]

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints : Use a stack to store the nodes of the linked list. Then, pop the nodes from the stack and reorder the linked list.