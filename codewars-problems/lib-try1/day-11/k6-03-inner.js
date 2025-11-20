function createMessage() {
  let words = [firstWord];

  function inner(nextWord) {
    if (!nextWord) {
      return words.join(" ");
    }
    words.push(nextWord);
    return inner;
  }

  return inner;
}