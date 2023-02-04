function howManyHundreds(num) {
  var x = Math.floor(num / 100);
  return x;
}
console.log(howManyHundreds(1000))
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);