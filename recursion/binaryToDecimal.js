const binToDec = (binStr , i) =>{
    let n = binStr.length
    if(i == n-1) return binStr[i] - '0'
    return ((binStr[i]-'0')<<(n-i-1))+binToDec(binStr,i+1)
}

console.log(binToDec("0100",0))