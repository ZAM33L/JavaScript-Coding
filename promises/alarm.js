const alarm = async (ms) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (`alarm ringing after ${ms} milliseconds`)
        },ms)
    })
}

alarm(3000).then(message =>{
    console.log(message)
})