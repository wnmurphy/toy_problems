function BFS (rootNode, target) {
  let queue = [], currentNode, i;
  queue.push(rootNode);
  while (queue.length > 0) {
    currentNode = queue.unshift();
    if (currentNode === target) {
      return true;
    } else {
      // Add the current node's children to the queue.
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.unshift(currentNode.children[i]);
      }
    }
  }
  return false;
}
