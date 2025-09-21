var canPlaceFlowers = function(flowerbed, n) {
    let l = flowerbed.length
        for(i=0;i<l;i++){
            if(flowerbed[i] === 0 && (i == 0 || flowerbed[i-1] ===0) && (i == l-1 || flowerbed[i+1] ===0)){
                flowerbed[i] = 1
                n -=1
            }
            if(n<=0){
                return true
            }
        }
        return false  
};