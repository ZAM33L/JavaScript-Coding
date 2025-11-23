function isAgeDiverse(list) {
  let ages = list.map(d => d.age);

  return (
    ages.some(a => a >= 13 && a <= 19) &&
    ages.some(a => a >= 20 && a <= 29) &&
    ages.some(a => a >= 30 && a <= 39) &&
    ages.some(a => a >= 40 && a <= 49) &&
    ages.some(a => a >= 50 && a <= 59) &&
    ages.some(a => a >= 60 && a <= 69) &&
    ages.some(a => a >= 70 && a <= 79) &&
    ages.some(a => a >= 80 && a <= 89) &&
    ages.some(a => a >= 90 && a <= 99) &&
    ages.some(a => a >= 100)
  );
}