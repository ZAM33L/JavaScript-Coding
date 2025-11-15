function onlyOne(...flags) {
  let count = 0;

  for (let f of flags) {
    if (f === true) count++;
    if (count > 1) return false;
  }

  return count === 1;

}