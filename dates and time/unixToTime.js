const unixToTime = (unix) =>{
    const date = new Date(unix * 1000)
    const hour = String(date.getHours()).padStart(2,'0')
    const min = String(date.getMinutes()).padStart(2,'0')
    const sec = String(date.getSeconds()).padStart(2,'0')
    return `${date.toDateString()} - ${hour}:${min}:${sec}`
}

console.log(unixToTime(1577836800))

//generating unix
let date = new Date("2020-01-01")
let unix = Math.floor(date.getTime()/1000)
console.log(unix)