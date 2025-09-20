var numberToWords = function(num) {
    if (num === 0) return "Zero";
    
    const belowTwenty = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
        "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    
    const tens = [
        "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy",
        "Eighty", "Ninety"
    ];
    
    const thousands = ["", "Thousand", "Million", "Billion"];
    
    function helper(n) {
        let result = "";
        if (n === 0) {
            return "";
        } else if (n < 20) {
            result = belowTwenty[n] + " ";
        } else if (n < 100) {
            result = tens[Math.floor(n / 10)] + " " + helper(n % 10);
        } else {
            result = belowTwenty[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
        }
        return result;
    }
    
    let result = "";
    let i = 0;
    
    while (num > 0) {
        let part = num % 1000;
        if (part !== 0) {
            result = helper(part) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    
    return result.trim();
};
