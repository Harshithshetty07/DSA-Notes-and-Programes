

// Problem 1: Design Linked List

function Node(val) {
    this.val = val;
    this.next = null;
}

function myLinkedList() {
    this.head = null;
    this.size = 0;
}

myLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};


console.log(new Node(10))
myLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
};

myLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    let newNode = new Node(val);
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};


myLinkedList.prototype.getElement = function(index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

myLinkedList.prototype.deleteElement = function(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

let list = new myLinkedList();

list.addAtHead(10);
list.addAtTail(20);
list.addAtIndex(1, 15);

console.log(list.getElement(1)); // 15




// Problem 2: Middle Linked list

// let head1 = [1, 2, 3, 4, 5];
// let head2 = [1, 2, 3, 4, 5, 6]

function arrayToLinkedList(arr) {
    let head = new Node(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return head;
}


var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next !=null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;
}

let head1 = arrayToLinkedList([1, 2, 3, 4, 5, 6])

console.log(middleNode(head1))


// anwser 2 
// let head1 = [1, 2, 3, 4, 5];

// function middleArray(arr) {
//     return arr[Math.floor(arr.length / 2)];
// }

// console.log(middleArray(head1)); // 3


// Problem 3 Reverse linked list

var reverseLinkedList = function(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head
}

let head2 = arrayToLinkedList([1, 2, 3, 4, 5]);  /// arrayToLinkedList is just optional 
console.log(reverseLinkedList(head2))