function score(dice) {
  const counts = [0, 0, 0, 0, 0, 0, 0]; 

  for (const d of dice) counts[d]++;

  let total = 0;

  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      total += i === 1 ? 1000 : i * 100;
      counts[i] -= 3;
    }
  }

  total += counts[1] * 100;
  total += counts[5] * 50;

  return total;
}