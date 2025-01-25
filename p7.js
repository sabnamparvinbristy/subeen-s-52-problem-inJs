function number(line) {
  var arr = line.split(" ");
  // split korle string ke substring e vaag kore

  var newArr = arr.filter((num) => num !== "");
  // filter() method on the numbersArray to create a new array (newArr) that includes only those elements from numbersArray which are not empty strings ('').

  var result = newArr.length; //new array er lenth e ans

  return result;
}

var result = number("10 20 30 40");
console.log(`${result}`);
