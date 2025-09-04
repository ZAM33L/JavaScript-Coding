const isPalindrome = (str , left , right) =>{
    if(left>=right) return true
    if(str[left]!=str[right]) return false
    return isPalindrome(str , left+1,right-1)
}
str ="sbbs"
n = str.length
console.log(isPalindrome(str,0,n-1))