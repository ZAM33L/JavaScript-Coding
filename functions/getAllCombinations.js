function getAllC(str){
    const results =[]

    function genC(currC,index){
        if(index == str.length){
            if(currC != ""){
                results.push(currC)
            }
            return
        }
        //include current character
        genC(currC+str[index],index+1)
        //exclude current character
        genC(currC,index+1)
    }

    genC("",0)
    return results

}

const str = "abc"
const answer = getAllC(str)
console.log(answer)