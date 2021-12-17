// BINARY SEARCH TREE ITERATOR WHICH SHOULD HAVE A NEXT METHOD AND A HASNEXT METHOD

function BinarySearchTreeIterator(tree: BinarySearchTree) {
  this.tree = tree;
  this.current = null;
}

BinarySearchTreeIterator.prototype.next = function() {
  if (this.current === null) {
    this.current = this.tree.root;
  } else if (this.current.right !== undefined || this.current.right !== null) {
    this.current = this.current.right;
    while (this.current.left !== null) {
      this.current = this.current.left;
    }
  } else {
    let parent = this.current;
    this.current = this.current.parent;
    while (this.current !== null && parent === this.current.right) {
      parent = this.current;
      this.current = this.current.parent;
    }
  }
  return this.current !== null;
}

BinarySearchTreeIterator.prototype.hasNext = function() {
  return this.current !== null;
}