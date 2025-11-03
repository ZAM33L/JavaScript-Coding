function splitAndMerge(string, separator) {
  let x = string
          .split(" ")
          .map(word=>word.split("").join(separator))
          .join(" ")
  return x
}