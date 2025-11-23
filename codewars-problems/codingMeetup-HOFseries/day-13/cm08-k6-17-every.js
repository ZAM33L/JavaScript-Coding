function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  const required = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const present = list.map(dev => dev.continent);
  return required.every(continent => present.includes(continent));
}