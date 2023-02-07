function range(start,end,step) {
  var arr = [];

  for(var i = 0; i <= ((end - start) / step); i++) {
    arr.push(start + (i * step));
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

//solution - the main issue i faced was the beginning value of the index. the arr.push method should have the start value as the first value.