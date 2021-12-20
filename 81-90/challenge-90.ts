// Two Sum IV - Input is a BST

const twoSumBST = (root: TreeNode, target: number): boolean => {
    if (root.left === null && root.right === null) {
        return root.val === target;
    }
  const arr: number[] = [];
  const dfs = (node: TreeNode) => {
    if (node) {
      dfs(node.left);
      arr.push(node.val);
      dfs(node.right);
    }
    };
    dfs(root);
    for (let i = 0; i < arr.length; i++) {
        for (let j = result.length; j > i; j--) {
            if (arr[i] + arr[j] === k) return true;
    }
}

    return false;
};