const getYesterday = (today) =>{
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() -1)
    return yesterday.toDateString()
}

const today = new Date()
console.log(getYesterday(today))