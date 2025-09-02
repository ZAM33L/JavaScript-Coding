
const now = new Date();

const dOW = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const mOY = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const currentD = dOW[now.getDay()]
console.log(`today is :${currentD}`);
const currentM = mOY[now.getMonth()]
console.log(`today is :${currentM}`);

const currentTime = now.toLocaleTimeString();
console.log(`current time is : ${currentTime}`)

const currentDate = now.toLocaleDateString();
console.log(`current date is : ${currentDate}`)

const time24 = now.toLocaleTimeString('en-us',{hour12:false});
const time12 = now.toLocaleTimeString('en-us',{hour12:true});

console.log(`time in 24hr format : ${time24}`);
console.log(`time in 12hr format : ${time12}`);


console.log(`current date and time string: ${now.toLocaleString()}`)