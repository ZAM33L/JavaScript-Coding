const date = new Date();
const month = date.toLocaleString('default',{month:"long"})
console.log(month)

const getMonth = (date) =>{
    return date.toLocaleString('default',{month:"long"})
}
const date1 = new Date(2020,1,29)
console.log(getMonth(date1))