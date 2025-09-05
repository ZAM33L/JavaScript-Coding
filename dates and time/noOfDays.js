const noOfDays= (month,year) =>{
    return new Date(year,month,0).getDate()
}

let date = new Date()
let month = 4
let year = 2021

console.log(noOfDays(month,year))