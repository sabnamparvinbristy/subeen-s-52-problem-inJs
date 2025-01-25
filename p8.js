function sort(a, b, c) {
  var arr = [a, b, c];

  arr.sort((x, y) => x - y); // js e sort method.compare kore

  return arr;
}

console.log(sort(10, 2, 7));
