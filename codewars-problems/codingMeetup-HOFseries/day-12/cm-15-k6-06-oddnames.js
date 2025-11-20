function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(dev => {
    const sum = dev.firstName
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return sum % 2 === 1;
  });
}