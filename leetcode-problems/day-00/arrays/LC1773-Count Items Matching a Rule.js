var countMatches = function (items, ruleKey, ruleValue) {
    if (ruleKey == "type") {
        index = 0
    }
    else if (ruleKey == "color") {
        index = 1
    }
    //ruleKey = name
    else {
        index = 2
    };

    matching_count = 0
    for(item of items){
        if(item[index] == ruleValue){
            matching_count +=1
        }
    }
    return matching_count
}

items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
// ruleKey = "color"
// ruleValue = "silver"
console.log(countMatches(items,"name","pixel"))