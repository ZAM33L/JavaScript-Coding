
var solution = function(isBadVersion) {
    return function(n) {
       let l=1 , r=n
       while(l<r){
       let mid = Math.floor((l+r)/2)
       if(isBadVersion(mid)){
            r = mid
       }
       else{
            l = mid+1
       }
       }
       return l
    };
};

//linear search

// var solution = function(isBadVersion) {
//     return function(n) {
//         for(let i=1;i<=n;i++){
//             if(isBadVersion(i)){
//                 return i
//             }
//         }
//         return n
//     };
// };