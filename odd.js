function isOdd(num){
  const oddNum = "odd";
  const evenNum = "even";
  if (num % 2 === 0){
    return evenNum;
  } else {
    return oddNum;
  }
}

console.log(isOdd(10))
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));