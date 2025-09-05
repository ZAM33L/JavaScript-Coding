const add = (a,b,callback)=>{
    console.log(a+b)
    callback(a,b)
}
const multiply = (x,y)=>{
    console.log(x*y)
}

add(1,2,multiply)