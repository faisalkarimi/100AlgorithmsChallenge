// COMPARE IF TWO TREE ARE THE SAME OR NOT USING RECURSION

const isSameTree = (tree1: TreeNode, tree2: TreeNode): boolean => {
    if (tree1 === null && tree2 === null) return true;
    if (tree1 === null || tree2 === null) return false;
    if (tree1.val !== tree2.val) return false;

    if (isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)) return true;

    return false;
}