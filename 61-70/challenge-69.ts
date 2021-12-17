// REMOVE DUPLICATES FROM SORTED LINKED LIST

const removeDuplicates = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;
  let current = head;
  while (current.next !== null) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}