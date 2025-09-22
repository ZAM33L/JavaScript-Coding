//optimal
function binarySearch(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}

var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    let res = [];

    for (let spell of spells) {
        let minPotion = Math.ceil(success / spell);
        let index = binarySearch(potions, minPotion);
        res.push(potions.length - index);
    }

    return res;
};

// not optimal
// var successfulPairs = function (spells, potions, success) {
//     let countArr = [];

//     for (let i = 0; i < spells.length; i++) {
//         let count = 0;

//         for (let j = 0; j < potions.length; j++) {
//             let x = spells[i] * potions[j];
//             if (x >= success) {
//                 count += 1;
//             }
//         }

//         countArr.push(count);
//     }

//     return countArr;
// };
