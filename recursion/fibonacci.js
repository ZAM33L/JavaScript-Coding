const fiboSeries = (n) =>{
    if(n == 0) return 0
    if(n == 1) return 1
    return fiboSeries(n-1)+fiboSeries(n-2)
}

const fiboPrint = (n) =>{
    for(let i=0;i<n;i++){
        console.log(fiboSeries(i))
    }
}

n = Number(10)
fiboPrint(n)