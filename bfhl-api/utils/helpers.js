export function reverseAltCaps(str) {
  let res = "";
  let upper = true;
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];
    if (/[a-zA-Z]/.test(ch)) {
      res += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = !upper;
    }
  }
  return res;
}
