function cutCube(volume,n){
  //coding here...
  const cubeRootVolume = Math.cbrt(volume);
  const cubeRootN = Math.cbrt(n);
  return Number.isInteger(cubeRootVolume) &&
         Number.isInteger(cubeRootN) &&
         Number.isInteger(cubeRootVolume / cubeRootN);
}