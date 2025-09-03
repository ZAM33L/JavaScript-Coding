let input = "1,-2,3,0"
let arr = input.split(",").map(Number)
console.log(arr)
for(i=0;i<arr.length;i++){
    if(arr[i]>0){
        console.log(arr[i]+" has +")
    }
    else if(arr[i]<0){
        console.log(arr[i]+" has -")
    }
    else{
        console.log(" its zero")
    }
}