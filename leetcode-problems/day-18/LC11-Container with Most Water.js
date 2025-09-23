var maxArea = function(height) {
    let result = 0
    let h = height.length
    let l = 0
    let r = h-1

    while(l<r){
        area = (r-l) * Math.min(height[l],height[r])
        result = Math.max(result,area)

        if(height[l]<height[r]){
            l +=1
        }
        else{
            r -=1
        }
    }
    return result
};