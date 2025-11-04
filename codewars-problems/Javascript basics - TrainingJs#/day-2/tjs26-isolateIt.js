function isolateIt(arr) {
//   let result = [];
  
//   for (let sub of arr) {
//     if (sub.length % 2 === 0) {
//       result.push(sub.slice(0, sub.length / 2) + "|" + sub.slice(sub.length / 2));
//     } else {
//       result.push(sub.slice(0, Math.floor(sub.length / 2)) + "|" + sub.slice(Math.floor(sub.length / 2) + 1));
//     }
//   }
  
//   return result;
return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
}
