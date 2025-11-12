function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
  const monthName = m[birthday.getMonth()];           
  const dayLastDigit = birthday.getDate() % 10;       
  const dayName = d[dayLastDigit];

  return `The ${monthName} ${dayName}`;
}