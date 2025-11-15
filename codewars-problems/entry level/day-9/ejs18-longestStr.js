function findLongest(array){
 let longest = array[0];

  for (let num of array) {
    if (String(num).length > String(longest).length) {
      longest = num;
    }
  }

  return longest;
}