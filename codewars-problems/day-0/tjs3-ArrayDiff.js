function arrayDiff(a, b) {
  const diff = a.filter(x => !b.includes(x));
  return diff
}
let a = [1, 2, 2, 2, 3]
let b = [2]
arrayDiff(a,b)