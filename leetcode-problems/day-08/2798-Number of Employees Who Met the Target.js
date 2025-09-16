var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let sum = 0
    for(i=0;i<hours.length;i++){
        if(hours[i] >= target){
            sum += 1
        }
    }
    return sum
};