// ROTATE LINKED LIST

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || !head.next || k === 0) return head;

  let current = head;
  let length = 1;

  while (current.next) {
    current = current.next;
    length++;
  }

  current.next = head;

  let step = length - (k % length);

  while (step > 0) {
    current = current.next;
    step--;
  }

  head = current.next;
  current.next = null;

  return head;
}