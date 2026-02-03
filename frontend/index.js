

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



// Problem 4: Linked list cycle

function linkedCycle(head) {
    let seenNodes = new Set();
    let curr = head;
    while(curr != null) {
        if(seenNodes.has(curr)) {
            return true
        }
        seenNodes.add(curr);
        curr = curr.next
    }
    return false
}

// answer 2

function linkedFloyd(head) {

    if(!head == null) return false

    let slow = head;
    let fast = head.next;
    while(slow != fast) {
        if(fast === null || fast.next == null) {
            return false
        }
        slow = slow.next;
        fast = fast.next.next
    }
    return true
}

// Problem 5: Palindrome linekd list 1 -> 2 -> 2 -> 1

function palindromeLinked(head) {
    // finding middle element
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    // reverse the second half of list
    let prev = null;
    let curr = slow;
    while(curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }

    // checking for palindrome

    let first = head;
    let second = prev;
    while(second) {
        if(first.value !== second.value) {
            return false
        }
        first = first.next;
        second = second.next;
    }
    return true
}


// Problem 6:  Intersection of 2 linked list


function intersecLinked(headA, headB) {
    // put all nodes of headB inside a set
    let store = new Set();

    while(headB) {
        store.add(headB);
        headB = headB.next;
    }

    // Check for each element of headA if they are present in set

    while(headA) {
        if(store.has(headA)) {
            return headA
        }
        headA = headA.next;
    }
    return null
}


// Problem 7:  Remove linked list element

function removeLinked(head, val) {
    let sentinel = new ListNode();   // this helps add one extra node in first position
    sentinel.next = head;
    let prev = sentinel;
    while(prev && prev.next) {
        if(prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next
        }
    }
    return sentinel.next
}


// Problem 8: Remove Nth node from end of list

function removeNth(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;

    while(head) {
        head = head.next;
        length++
    }
    let prevPos = length - n;
    let prev = sentinel;

    for(let i = 0; i < prevPos; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next;

    return sentinel.next
}


// Problem 9: Remove duplicates from sorted list

function removeDuplicates(head) {
    let curr = head;

    while(curr && curr.next) {
        if(curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
}


// Problem 10: Odd Even linked list

function oddEvenLinked(head) {

    if(!head || !head.next) return head

    let odd = head;
    let even = head.next;
    let evenStore = even;

    while(even.next && odd.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next
    }
    odd.next = evenStore;
    return head
}