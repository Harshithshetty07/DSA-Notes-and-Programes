

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