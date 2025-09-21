var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);  
    let boolArray = candies.map(candy => candy + extraCandies >= maxCandies);
    return boolArray;
};
