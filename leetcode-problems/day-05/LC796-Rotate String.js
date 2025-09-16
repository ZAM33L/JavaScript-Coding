var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    let combined = s+s
    return combined.includes(goal)
};

//rotation logic
// function leftRotate(str, k) {
//   k = k % str.length;  // handle k > str length
//   return str.slice(k) + str.slice(0, k);
// }
// function rightRotate(str, k) {
//   k = k % str.length;
//   return str.slice(str.length - k) + str.slice(0, str.length - k);
// }
