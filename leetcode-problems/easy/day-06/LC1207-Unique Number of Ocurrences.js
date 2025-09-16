var uniqueOccurrences = function(arr) {
    let newMap = new Map()
     arr.forEach(num => {
        newMap.set(num, (newMap.get(num) || 0) + 1)
    })
    return (new Set(newMap.values())).size == newMap.size
};