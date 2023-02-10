//In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.
const sumLargestNumbers = function(data) {
  var arr = data;
  var largest = 0;
  var secondLargest =0
  arr.sort();
  var largest = arr[arr.length -1];
  var secondLargest = arr[arr.length -2];
  var sum = largest + secondLargest;
return sum;
  
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));