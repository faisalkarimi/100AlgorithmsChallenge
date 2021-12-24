// DELETE NODE IN A LINKED LIST

const deleteNode = (node: Node): void => {
  node.value = node.next.value;
  node.next = node.next.next;
}