const recSum = (arr , n) =>{
    if(n<=0) return 0
    return recSum(arr,n-1)+arr[n-1]
}
const arrSum = (arr) =>{
    return recSum(arr,arr.length)
}

arr = [1,2,3,4,5]
console.log(arrSum(arr))