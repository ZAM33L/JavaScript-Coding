// let str = "Gandhi"

const palindromeCheck = (str) =>{
str = str.toLowerCase()
let len = str.length

for(let i=0;i<Math.floor(len/2);i++){
    if(str[i]!==str[len-i-1]){
        return false
    }
  
}
  return true
}

console.log(palindromeCheck("Racecar"))

