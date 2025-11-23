function sortByLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.sort((a, b) => {
    if (a.language === b.language) {
      return a.firstName.localeCompare(b.firstName);
    }
    return a.language.localeCompare(b.language);
  });
}