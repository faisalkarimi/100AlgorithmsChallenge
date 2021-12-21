// REVERSE A LINKED LIST

const reverseLinkedList = (head: Node): Node => {
    let prev: Node = null;
    let current: Node = head;
    let next: Node = null;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}