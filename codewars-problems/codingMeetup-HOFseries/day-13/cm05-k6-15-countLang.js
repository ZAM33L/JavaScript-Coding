function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  const counts = {};
  list.forEach(dev => {
    counts[dev.language] = (counts[dev.language] || 0) + 1;
  });
  return counts;
}