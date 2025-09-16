var map = function (arr, fn) {
    let transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArr.push(fn(arr[i], i));
    }
    return transformedArr;
};

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]