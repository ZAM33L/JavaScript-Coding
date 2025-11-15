function multiTable(number) {
  // good luck
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${i} * ${number} = ${i * number}`);
  }
  return result.join('\n');
}