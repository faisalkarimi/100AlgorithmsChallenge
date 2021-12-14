// REMOVE NTH NODE FROM END OF LINKED LIST

class ListNode {
    public value: number;
    public next: ListNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    let first: ListNode | null = head;
    let second: ListNode | null = head;
    let count: number = 0;
    
    while (count < n) {
        first = first.next;
        count++;
    }
    
    if (first === null) {
        return head.next;
    }
    
    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    
    return head;
}