// ADD TWO LINKED LISTS AND RETURN AS NEW LINKED LIST

class Node1 {
  constructor(public data: number, public next: Node1 | null = null) {
      this.data = data;
      this.next = next;
  }
}

class LinkedList {
  head: Node1 | null = null;
  tail: Node1 | null = null;
  add(data: number): void {
    const node = new Node1(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const sumUp2 = (list1: LinkedList, list2: LinkedList): LinkedList => {
  let result = new LinkedList();
  let carry = 0;
  let node1 = list1.head;
  let node2 = list2.head;
  while (node1 || node2) {
    let sum = (node1 ? node1.data : 0) + (node2 ? node2.data : 0) + carry;
    result.add(sum % 10);
    carry = Math.floor(sum / 10);
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  if (carry) {
    result.add(carry);
  }
  return result;
}

const l1 = new LinkedList();
l1.add(2);
l1.add(4);
l1.add(3);
const l2 = new LinkedList();
l2.add(5);
l2.add(6);
l2.add(4);

console.log(sumUp2(l1, l2));
