var kSum = function(nums, k) {
    const n = nums.length;

    // Sum of all positive numbers gives max sum
    let maxSum = 0n;
    for (const num of nums) {
        if (num > 0) maxSum += BigInt(num);
    }

    // Absolute values sorted ascending
    const absNums = nums.map(num => BigInt(Math.abs(num))).sort((a, b) => (a < b ? -1 : 1));

    // Max-heap implemented via array and manual operations
    class MaxHeap {
        constructor() { this.arr = []; }
        size() { return this.arr.length; }
        push(val) {
            this.arr.push(val);
            let i = this.arr.length - 1;
            while (i > 0) {
                const p = ((i - 1) >> 1);
                if (this.arr[p][0] >= this.arr[i][0]) break;
                [this.arr[p], this.arr[i]] = [this.arr[i], this.arr[p]];
                i = p;
            }
        }
        pop() {
            const max = this.arr[0];
            const end = this.arr.pop();
            if (this.arr.length === 0) return max;

            this.arr[0] = end;
            let i = 0;
            const n = this.arr.length;

            while (true) {
                let largest = i;
                let left = i * 2 + 1;
                let right = i * 2 + 2;

                if (left < n && this.arr[left][0] > this.arr[largest][0]) largest = left;
                if (right < n && this.arr[right][0] > this.arr[largest][0]) largest = right;

                if (largest === i) break;

                [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];
                i = largest;
            }

            return max;
        }
    }

    let ans = maxSum;
    const heap = new MaxHeap();

    if (absNums.length > 0)
        heap.push([maxSum - absNums[0], 0]);

    for (let i = 0; i < k - 1; i++) {
        const [nextMaxSum, idx] = heap.pop();
        ans = nextMaxSum;

        if (idx + 1 < absNums.length) {
            heap.push([nextMaxSum - absNums[idx + 1], idx + 1]);
            heap.push([nextMaxSum - absNums[idx + 1] + absNums[idx], idx + 1]);
        }
    }

    return Number(ans);
};

// var kSum = function(nums, k) {
//     function subsequenceSums(arr) {
//         let sums = [0];
//         for (let num of arr) {
//             let newSums = [];
//             for (let sum of sums) {
//                 newSums.push(sum + num);
//             }
//             sums = sums.concat(newSums);
//         }
//         return sums;
//     }

//     let subSequence = subsequenceSums(nums);
//     subSequence.sort((a, b) => b - a);  
//     return subSequence[k-1];          
// };
