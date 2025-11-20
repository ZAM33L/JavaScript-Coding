function askForMissingDetails(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list
    .filter(dev => Object.values(dev).includes(null))  // only devs with missing fields
    .map(dev => {
      const missingField = Object.keys(dev).find(key => dev[key] === null);

      return {
        ...dev,
        question: `Hi, could you please provide your ${missingField}.`
      };
    });
}