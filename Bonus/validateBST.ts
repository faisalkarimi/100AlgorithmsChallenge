// DETERMINE IF A BINARY SEARCH TREE IS A VALID BST WHERE ALL PARENTS ARE GREATER THAN LEFT CHILDREN AND LESS THAN RIGHT CHILDREN

const isValidBST = (root: TreeNode | null): boolean => {
    if (!root) return true;
    let stack: TreeNode[] = [];
    let node: TreeNode | null = root;
    let prev: number | null = null;
    while (node || stack.length) {
        while (node) {
        stack.push(node);
        node = node.left;
        }
        node = stack.pop();
        if (prev !== null && node.val <= prev) return false;
        prev = node.val;
        node = node.right;
    }
    return true;
}