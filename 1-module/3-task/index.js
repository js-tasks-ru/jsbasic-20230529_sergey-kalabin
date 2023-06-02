function ucFirst(str) {
  // ваш код...
  const strTrim = str.trim();
  return `${strTrim[0].toUpperCase()}${strTrim.slice(1)}`;
}
