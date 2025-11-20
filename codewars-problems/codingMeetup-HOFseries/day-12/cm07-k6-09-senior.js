function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)
  const maxAge = Math.max(...list.map(dev => dev.age));
  return list.filter(dev => dev.age === maxAge);
}