function findSimilarity(str, word) {
  const len = word.length;
  const first = word[0];
  const last = word[word.length - 1];
  const regex = new RegExp(`\\b${first}[a-zA-Z]{${len - 2}}${last}\\b`, "g");
  const matches = str.match(regex);
  return matches ? matches.join(" ") : "";
}
