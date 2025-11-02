function createPhoneNumber(numbers) {
  const fp = numbers.slice(0, 3).join('');   // first part
  const sp = numbers.slice(3, 6).join('');   // second part
  const tp = numbers.slice(6).join('');      // third part
  
  return `(${fp}) ${sp}-${tp}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

