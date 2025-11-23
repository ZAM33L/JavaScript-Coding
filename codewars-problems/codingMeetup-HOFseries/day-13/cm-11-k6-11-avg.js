function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  const devSum = list.reduce((sum, dev) => sum + dev.age, 0);
  const count = list.length;
  let avg = Math.round(devSum / count)
  return avg
}