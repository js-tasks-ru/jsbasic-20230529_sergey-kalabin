function getMinMax(str) {
  // ваш код...
  if (!str) return null;
  let arr = str.match(/-?\d+(\.\d+)?/g).map(it => { return +it; });
  return {min: Math.min(...arr), max: Math.max(...arr)};
}
