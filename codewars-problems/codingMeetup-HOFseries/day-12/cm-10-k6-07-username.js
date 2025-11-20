function addUsername(list) {
  const currentYear = new Date().getFullYear();

  return list.map(dev => {
    const username =
      dev.firstName.toLowerCase() 
      + dev.lastName.replace('.', '').toLowerCase() 
      + (currentYear - dev.age);
    return { ...dev, username };
  });
}