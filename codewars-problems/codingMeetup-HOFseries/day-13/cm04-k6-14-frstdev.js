function getFirstPython(list) {
  // Thank you for checking out my kata :)
  const dev = list.find(d => d.language === 'Python');

  if (!dev) {
    return "There will be no Python developers";
  }

  return `${dev.firstName}, ${dev.country}`;
}