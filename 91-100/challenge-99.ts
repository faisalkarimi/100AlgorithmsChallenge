// SEARCH IN A BINARY SEARCH TREE AND RETURN NODE AND ITS CHILDREN

const searchBST = (root: any, val: number): any => {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);
}