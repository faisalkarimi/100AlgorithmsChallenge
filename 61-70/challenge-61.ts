// REVERSE NODES IN K GROUP

const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
    if (!head || k <= 1) return head;
    let curr = head;
    let count = 0;
    while (curr && count < k) {
        curr = curr.next;
        count++;
    }
    if (!curr) return head;
    curr = reverseKGroup(curr, k);
    while (count-- > 0) {
        const temp = head!.next;
        head!.next = curr;
        curr = head;
        head = temp;
    }
    return curr;
}