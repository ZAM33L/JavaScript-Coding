function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  const counts = { Python: 0, Ruby: 0, JavaScript: 0 };

  list.forEach(dev => counts[dev.language]++);

  const nums = Object.values(counts); // [countPython, countRuby, countJs]

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return max <= min * 2;
}