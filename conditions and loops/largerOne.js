

const largerOne = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}



let arr = [5, 2]
console.log(largerOne(arr))