function ucFirst(str) {
  // ваш код...
  const strTrim = str.trim();
  if (str.length === 0 && str === '') {
    return '';
  };
  return `${strTrim[0].toUpperCase()}${strTrim.slice(1)}`;
};
