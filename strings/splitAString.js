var balancedStringSplit = function(s) {
    ans = 0
    l = 0
    for(char of s){
        if(char == 'L'){
            l+=1
        }
        else{
            l-=1
        }
    if(l == 0){
        ans += 1
    }
    }
   return ans 
};

s = "RLRRLLRLRL"
console.log(balancedStringSplit(s))