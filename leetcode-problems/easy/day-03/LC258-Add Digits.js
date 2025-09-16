var addDigits = function(num) {
    while(num>=10){
        let sum=0
        while(num>0){
            //we can use this for in place calculation , without sum
            // num = num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
            let d = num%10
            sum +=d
            num=Math.floor(num/10)
        }
        num = sum
    }
    return num
};

