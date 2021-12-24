// DETERMINE IF A LINKED LIST IS A PALINDROME

const isPalindrome = (head: LinkedListNode<number>): boolean => {
  if (!head) {
    return true;
  }

  const stack: LinkedListNode<number>[] = [];
  let current = head;

  while (current) {
    stack.push(current);
    current = current.next;
  }

  while (stack.length) {
    const popped = stack.pop();
    if (popped.value !== head.value) {
      return false;
    }
    head = head.next;
  }

  return true;
}