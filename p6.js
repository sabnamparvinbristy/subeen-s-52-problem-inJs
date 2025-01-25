function sum(num) {
  var numStr =
    num.toString(); /*number ke string hisebe neyar jonno .toString use kora hoy*/
  var firstDigit = parseInt(numStr[0]); // The parseInt method parses a value as a string and returns the first integer.
  var lastDigit = parseInt(numStr[numStr.length - 1]);
  return firstDigit + lastDigit;
}

var result = sum(1234569);
console.log(`${result}`);
