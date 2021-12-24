// GIVEN A  BINARY TREE PERFORM A LEVEL ORDER TRAVERSAL USING RECURSION

const levelOrder = (root: TreeNode | null): number[][] => {
    if (root === null) return [];
    const result: number[][] = [];

    const traverse = (node: TreeNode, level: number) => {
        if (node) {
            if (result[level] === undefined) result[level] = [];
            result[level].push(node.val);
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }
    }

    traverse(root, 0);
    return result;
}