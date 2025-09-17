var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));

    while (a <= b) {
        let sum = a * a + b * b;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            a++;
        } else {
            b--;
        }
    }

    return false;
};

// not efficient
// var judgeSquareSum = function(c) {
//     for(i=1;i<c;i++){
//         for(j=2;j<c;j++){
//             iSqr = i ** 2
//             jSqr = j ** 2
//             sum = iSqr + jSq
//             if(sum === c){
//                 return true
//             }
//         }
//     }
//     return false
// };