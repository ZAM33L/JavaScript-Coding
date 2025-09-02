let oddNums =[]
let evenNums = []

for(i=1;i<=100;i++){
    if(i%2 == 0){
        evenNums.push(i)
    }
    else{
        oddNums.push(i)
    }
}

console.log(evenNums)
console.log(oddNums)