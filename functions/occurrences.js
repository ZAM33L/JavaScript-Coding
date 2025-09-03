const count = (str) =>{
    // const res = {}
    const map = new Map()
    for(const char of str){
        // res[char] = (res[char] || 0)+1
        map.set(char,(map.get(char)||0)+1)
    }
    // return res
    return Object.fromEntries(map)
}

const string = "hello world"
const answer = JSON.stringify(count(string))
console.log("result : "+ answer)