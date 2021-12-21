// USING TO LINKED LISTS ADD VALUES OF TWO LISTS TOGETHER INTO A NEW LIST

const ListNode = class {
    next: ListNode | null = null;
    constructor(public val: number) {
        this.val = val;
    }
}

const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  let result = new ListNode(0);
  let current = result;
  let carry = 0;

    while (l1 || l2) {
        let sum = l1 ? l1.val : 0; + l2 ? l2.val : 0 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return result.next;
};

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4)

console.log(addTwoNumbers(list1, list2));
