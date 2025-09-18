var xorBeauty = function(nums) {
  const n = nums.length;
  const bitCounts = new Array(32).fill(0);

  for (const num of nums) {
    for (let bit = 0; bit < 32; bit++) {
      if ((num & (1 << bit)) !== 0) {
        bitCounts[bit]++;
      }
    }
  }

  let result = 0;

  for (let bit = 0; bit < 32; bit++) {
    const bitMask = 1 << bit;
    const countSet = bitCounts[bit];
    const countUnset = n - countSet;

    const pairsWithBitSet = n * n - countUnset * countUnset;

    const contribution = pairsWithBitSet * countSet;

    if (contribution % 2 === 1) {
      result |= bitMask;
    }
  }

  return result;
};

//not optimal
// var xorBeauty = function(nums) {
//   let xorResult = 0;
  
//   for (let a of nums) {
//     for (let b of nums) {
//       const orVal = a | b;
//       for (let numVal of nums) {
//         const andVal = orVal & numVal;
//         xorResult ^= andVal;
//       }
//     }
//   }
  
//   return xorResult;
// };
