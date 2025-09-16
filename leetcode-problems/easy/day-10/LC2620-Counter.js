var createCounter = function(n) {
    
    return function() {
        return n ++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// //using generator
// function* createCounter(n) {
//     while (true) {
//         yield n++;
//     }
// }
// const counter = createCounter(0);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2
