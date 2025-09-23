class CustomMinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return root;
    }

    _heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const n = this.size();
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
}

function findKthLargest(nums, k) {
    const minHeap = new CustomMinHeap();

    for (const num of nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    return minHeap.peek();
}

//time limit xceeded
// while (k > 1) {
//         const max = Math.max(...nums);
//         const idx = nums.indexOf(max);
//         nums.splice(idx, 1);
//         k--;
//     }
//     return Math.max(...nums);