var sortPeople = function(names, heights) {
    let combined =  names.map((name,index)=>{
        return { name:name,height:heights[index]}
    })
    combined.sort((a,b)=>b.height - a.height)
    return combined.map(person => person.name)
};

names = ["Mary","John","Emma"]
heights = [180,195,170]

console.log(sortPeople(names,heights))