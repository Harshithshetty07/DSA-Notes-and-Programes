

// Min Heap 

// Insering a value in heap time complexity is O(log n)


class MinHeap {
    constructor() {
        this.heap = [5, 10, 20, 30];
        // this.heap = []
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1
    }
    getRightChildIndex(i) {
        return (2 * i) + 2
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    insert(val) {
        this.heap.push(val)
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex)
    }
    heapifyUp(i) {
        while(i > 0) {
            let parentIndex = this.getParentIndex(i);
            if(this.heap[i] < this.heap[parentIndex]) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            } else {
                break;
            }
        }
    }
}

let newHeap = new MinHeap();

newHeap.insert(1)


// newHeap.insert(5)
// newHeap.insert(10)
// newHeap.insert(20)
// newHeap.insert(30)
// newHeap.insert(0)
// newHeap.insert(1)

console.log(newHeap)


// Deleting elements from a Heap

class MinHeap {
    constructor() {
        // this.heap = [5, 10, 20, 30];
        this.heap = []
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1
    }
    getRightChildIndex(i) {
        return (2 * i) + 2
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    insert(val) {
        this.heap.push(val)
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex)
    }
    heapifyUp(i) {
        while(i > 0) {
            let parentIndex = this.getParentIndex(i);
            if(this.heap[i] < this.heap[parentIndex]) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            } else {
                break;
            }
        }
    }


    extract() {
        if(this.heap.length < 1) return null;

        let min = this.heap[0];
        let last = this.heap.length - 1;

        [this.heap[0], this.heap[last]] = [this.heap[last], this.heap[0]]
        this.heap.pop()

        this.heapifyDown(0);

        return min;
    }

    heapifyDown(i) {
        let left = this.getLeftChildIndex(i)
        let right = this.getRightChildIndex(i)

        let n = this.heap.length - 1;

        let smallest = i;

        if(left < n && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if(right < n && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        if(smallest != i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }

    peek() {
        if(!this.heap.length) return null
        return this.heap[0]
    }
}

let newHeaps = new MinHeap();

newHeaps.insert(5)
newHeaps.insert(20)
newHeaps.insert(4)
newHeaps.insert(10)
console.log(newHeaps.peek())
newHeaps.insert(1)
newHeaps.insert(0)
console.log(newHeapss.extract());
console.log(newHeaps.extract());

console.log(newHeaps)