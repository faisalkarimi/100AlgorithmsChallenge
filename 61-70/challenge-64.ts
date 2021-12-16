// COMPARE IF TWO TREE ARE EQUAL

const isEqual = (tree1: any, tree2: any): boolean => {
  if (tree1.value !== tree2.value) return false;
  if (tree1.value === [] && tree2.value !== []) return false;
  if (tree1.left === null && tree2.left !== null) return false;
    if (tree1.right === null && tree2.right !== null) return false;
  if (tree1.left && tree2.left) {
    return isEqual(tree1.left, tree2.left);
  }
  if (tree1.right && tree2.right) {
    return isEqual(tree1.right, tree2.right);
  }
  return true;
}