
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = (list1 !== null) ? list1 : list2;

    return dummy.next;
};


function arrayToList(arr) {
    let dummy = new ListNode(-1);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}


function listToArray(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}


let list1 = arrayToList([1,2,4]);
let list2 = arrayToList([1,3,4]);

let merged = mergeTwoLists(list1, list2);
console.log(listToArray(merged)); 



// var mergeTwoLists = function(list1, list2) {
//     let merged = []
//     let n= list1.length
//     let m = list2.length
//     let i = 0
//     while(i < n && i<m){
//         merged.push(list1[i])
//         merged.push(list2[i])
//         i++
//     }
//     while(i < n){
//         merged.push(list1[i])
//         i++
//     }
//     while(i<m){
//         merged.push(list2[i])
//         i++
//     }
//     return merged
// };

// let list1 = [1,2,4]
// let list2 = [1,3,4]

console.log(mergeTwoLists(list1,list2))
