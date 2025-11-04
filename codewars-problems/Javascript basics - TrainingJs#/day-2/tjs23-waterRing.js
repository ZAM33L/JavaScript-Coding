function infiniteLoop(arr, d, n) {
  
  const flat = [].concat(...arr);
//const flat = arr.flat();

  if (d === "left") {
    for (let i = 0; i < n; i++) {
      flat.push(flat.shift());
    }
  } else if (d === "right") {
    for (let i = 0; i < n; i++) {
      flat.unshift(flat.pop());
    }
  }

  const result = [];
  let index = 0;
  for (let sub of arr) {
    result.push(flat.slice(index, index + sub.length));
    index += sub.length;
  }

  return result;
}


