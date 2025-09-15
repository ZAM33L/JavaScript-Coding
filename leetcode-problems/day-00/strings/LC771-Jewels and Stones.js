var countJewels = (jewels,stones) =>{
    const jewelSet = new Set(jewels)
    let count = 0
    let n = stones.length
    for(let i = 0; i<n;i++){
        if(jewelSet.has(stones.charAt(i))){
            count ++
        }
    }
    return count
}

jewels = "A"
stones = "aAAbbbb"
console.log(countJewels(jewels,stones))