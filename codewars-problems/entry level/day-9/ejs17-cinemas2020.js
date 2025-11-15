function maximumSeating(seats) {
   let count = 0;
  let n = seats.length;

  for (let i = 0; i < n; i++) {
    if (
      seats[i] === 0 && 
      (i - 1 < 0 || seats[i - 1] === 0) &&
      (i - 2 < 0 || seats[i - 2] === 0) &&
      (i + 1 >= n || seats[i + 1] === 0) &&
      (i + 2 >= n || seats[i + 2] === 0)
    ) {
      seats[i] = 1;
      count++;
    }
  }

  return count;
}
// function maximumSeating(seats) {
//  let amount = 0;
//  for ( let i = 0; i < seats.length; i++){
//   let left1 = seats[i-1] || 0;
//   let left2 = seats[i-2] || 0;
//   let right1 = seats[i+1] || 0;
//   let right2 = seats[i+2] || 0;
// //   console.log(i, left1, left2, right1, right2);
//   if (seats[i] === 0 && left1 === 0 && left2 === 0 && right1 === 0 && right2 === 0) {
//     amount++;
//     i += 2;
//   }
//  }
//   return amount;
// }