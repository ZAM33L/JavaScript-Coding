function convert_temp(temp, from, to) {
  // 1. Convert FROM input scale → CELSIUS
  const toC = {
    "C":  t => t,
    "F":  t => (t - 32) * 5/9,
    "K":  t => t - 273.15,
    "R":  t => (t - 491.67) * 5/9,
    "De": t => 100 - t * 2/3,
    "N":  t => t * 100/33,
    "Re": t => t * 5/4,
    "Ro": t => (t - 7.5) * 40/21
  };

  // 2. Convert FROM Celsius → target scale
  const fromC = {
    "C":  t => t,
    "F":  t => t * 9/5 + 32,
    "K":  t => t + 273.15,
    "R":  t => (t + 273.15) * 9/5,
    "De": t => (100 - t) * 3/2,
    "N":  t => t * 33/100,
    "Re": t => t * 4/5,
    "Ro": t => t * 21/40 + 7.5
  };

  // actual conversion
  const celsius = toC[from](temp);
  const result  = fromC[to](celsius);

  return Math.round(result);
}
