function checkSpam(str) {
  let strUpper = str.toUpperCase();
  if (strUpper.includes('1XBET')) {
    return true;
  }
  else if (strUpper.includes('XXX')) {
    return true;
  }
  return false;
};
