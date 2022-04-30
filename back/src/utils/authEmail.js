export function generateRandomNumberString(n) {
  let result = "";
  for (let v = 0; v < n; v++) {
    let number = Math.floor(Math.random() * 10);
    result += number;
  }
  return result;
}
