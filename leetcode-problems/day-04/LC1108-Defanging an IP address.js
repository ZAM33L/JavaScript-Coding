var defangIPaddr = function(address) {
    let nums = address.split('.')
    return nums.join('[.]').toString()
};