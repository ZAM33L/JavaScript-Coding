let a = 2007
let year = Number(a)

function leapYear(year){
    if(year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                return true
            }
            return false
        }
        return true
    }
    return false
}

console.log(leapYear(year))