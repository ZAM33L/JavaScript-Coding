var maxGoodNumber = function(nums) {
    const permutations = [];

    function permute(arr, l = 0) {
        if (l === arr.length) {
            permutations.push(arr.slice());
            return;
        }
        for (let i = l; i < arr.length; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permute(arr, l + 1);
            [arr[l], arr[i]] = [arr[i], arr[l]];
        }
    }

    permute(nums);

    let maxNumber = 0;

    for (const perm of permutations) {
 
        const binaryConcat = perm.map(num => num.toString(2)).join('');
 
        const decimalValue = parseInt(binaryConcat, 2);
        maxNumber = Math.max(maxNumber, decimalValue);
    }

    return maxNumber;
};


//ok but has optimal issue with binary conversion
// var maxGoodNumber = function(nums) {
//     let rotatedArrs = []
//     let maxDigit = 0
//     for(i=0;i<nums.length;i++){
        
//         const rotatedArr = nums.slice(i).concat(nums.slice(0,i))
//         rotatedArrs.push(rotatedArr)
//     }
//     for(rotatedArr of rotatedArrs){
        
//         let binaryRotatedArr = [...rotatedArr].map(digit => digit.toString(2))
//         let concatBinaries = binaryRotatedArr.join('')
//         let concatDigit = parseInt(concatBinaries, 2)
//         maxDigit = Math.max(maxDigit,concatDigit)
//     }

//     return maxDigit
// };