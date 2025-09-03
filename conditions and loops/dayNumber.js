const dnf = (day) =>{
    const dOW = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    return dOW.indexOf(day.toLowerCase())+1

}

console.log(dnf("thursday"))

