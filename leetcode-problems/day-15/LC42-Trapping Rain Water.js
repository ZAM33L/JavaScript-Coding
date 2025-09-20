var trap = function(height) {
    let n = height.length
    if (n < 1) return 0

    let l = 0
    let r = n - 1
    let result = 0

    let lMax = height[l]
    let rMax = height[r]

    while (l < r) {
        if (lMax < rMax) {
            l += 1
            lMax = Math.max(lMax, height[l])
            result += lMax - height[l]
        } else {
            r -= 1
            rMax = Math.max(rMax, height[r])   
            result += rMax - height[r]         
        }
    }
    return result
};

height = [3,0,2,0,4]
console.log(trap(height))