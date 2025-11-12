function rgb(r, g, b) {
  const clamp = x => Math.max(0, Math.min(255, x)); // ensures 0 ≤ x ≤ 255
  const toHex = x => clamp(x).toString(16).toUpperCase().padStart(2, '0');
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
