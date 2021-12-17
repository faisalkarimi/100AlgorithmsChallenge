// POST ORDER TRAVERSAL ITERATIVE

const postOrderTraversal = (root: Node): number[] => {
    const result: number[] = [];
    const stack: Node[] = [];
    let current: Node | undefined = root;
  
    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
  
      current = stack.pop();
      result.push(current.value);
      current = current.right;
    }
  
    return result;
  }
