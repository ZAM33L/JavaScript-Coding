var climbStairs = function(n) {
   if(n == 1) return 1
   let a=1,b=2
   for(i=3;i<=n;i++){
    temp= a+b
    a=b
    b=temp
   } 
   return b
};

n=3
console.log(climbStairs(n))