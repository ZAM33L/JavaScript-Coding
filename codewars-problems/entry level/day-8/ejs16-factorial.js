function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Value must be between 0 and 12");
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
