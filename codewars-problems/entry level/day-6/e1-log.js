function countDays(log) {
  if (log.length === 0) return 0;

  const toSeconds = time => {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  let days = 1;
  let prev = toSeconds(log[0]);

  for (let i = 1; i < log.length; i++) {
    const current = toSeconds(log[i]);
    
    if (current <= prev) {
      days++;
    }
    prev = current;
  }

  return days;
}
