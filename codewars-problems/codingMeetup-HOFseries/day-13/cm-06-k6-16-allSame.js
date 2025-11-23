function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  const firstLang = list[0].language;
  return list.filter(dev => dev.language === firstLang).length === list.length;
}
// function isSameLanguage(list) {
//   const firstLang = list[0].language;
//   return list.every(dev => dev.language === firstLang);
// }