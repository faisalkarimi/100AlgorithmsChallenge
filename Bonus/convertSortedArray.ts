// CONVERT A SORTED ARRAY TO A BINARY SEARCH TREE OF HEIGHT BALANCED

const convertSortedArrayToBST = (arr: number[]): BST => {
  if (arr.length === 0) return null;
  const mid = Math.floor(arr.length / 2);
  const root = new BST(arr[mid]);
  root.left = convertSortedArrayToBST(arr.slice(0, mid));
  root.right = convertSortedArrayToBST(arr.slice(mid + 1));
  return root;
}