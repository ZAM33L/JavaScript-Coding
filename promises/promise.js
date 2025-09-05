const myPromise = new Promise((resolve,reject)=>{
    const success = false
    if(success){
        resolve("win")
    }
    else{
        reject("lose")
    }
})

myPromise
.then(message =>{
    console.log(message)
})
.catch(error =>{
    console.log(error)
})
