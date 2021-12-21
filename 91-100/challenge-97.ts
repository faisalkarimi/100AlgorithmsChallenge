// SWAP NODES IN PAIRS

const swapPairs = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;
  if (head.next === null) return head;
  const first = head;
  const second = head.next;
  const third = second.next;
  second.next = first;
  first.next = swapPairs(third);
  return second;
}