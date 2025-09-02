let a = prompt("enter first number")
let b = prompt("enter second number")

a = Number(a);
b = Number(b);

function add(a1,a2)
{
    return a1+a2;
}

function subtract(a1,a2)
{
    return a1-a2;
}

function multiply(a1,a2){
    return a1*a2
}

function divide(a1,a2){
    return a1/a2
}


let total = add(a,b)
let difference = subtract(a,b)
let product = multiply(a,b)
let quotient = divide(a,b)

console.log(total)
console.log(difference)
console.log(product)
console.log(quotient)