function incrementString(str) {
  const match = str.match(/(\d*)$/); // capture ending digits (if any)
  const numStr = match[0];
  const prefix = str.slice(0, -numStr.length); // part before the number

  if (numStr === "") return str + "1"; // no digits at the end

  const numLength = numStr.length;
  const incremented = String(Number(numStr) + 1);

  // preserve leading zeros if number length grows, adjust automatically
  const padded = incremented.padStart(numLength, "0");

  return prefix + padded;
}
