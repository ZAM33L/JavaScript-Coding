var largestAltitude = function(gain) {
    let curr_alt = 0
    let max_alt = 0

    for(val of gain){
        curr_alt += val
        max_alt = Math.max(max_alt,curr_alt)
    }

    return max_alt
};