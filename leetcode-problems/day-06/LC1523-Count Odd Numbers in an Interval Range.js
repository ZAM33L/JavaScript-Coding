
var countOdds = function(low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
    // let count = 0
    // for(i=low;i<=high;i++){
    //     if(i%2 === 1){
    //         count += 1
    //     }
    // }
    // return count
};