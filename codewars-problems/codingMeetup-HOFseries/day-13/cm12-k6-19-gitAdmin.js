function findAdmin(list, language) {
  // thank you for checking out the Coding Meetup kata :)
   return list.filter(dev => dev.language === language && dev.githubAdmin === 'yes');
}