var compose = function(functions) {
    
    return function(x) {
       return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

//reduceRight makes it to go from right to left
//reduce makes it to go from left to right