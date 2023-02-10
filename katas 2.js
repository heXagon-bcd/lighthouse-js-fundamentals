//For this kata, we'll be adding only the numbers in the array which match the given condition.


const conditionalSum = function(values, condition) {
  var evenSum = 0;
  var oddSum = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      evenSum += values[i];
    } 
  } 
  for (i = 0; i < values.length; i++) {
   if (condition == "odd" && values[i] % 2 !== 0) {
      oddSum += values[i];
      } 
    }
  if (condition === "even"){
    return evenSum;
  } else {
    return oddSum;
  }
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));




const conditionalSum = function(values, condition) {
  let sum = 0;
  values.forEach(value => {
    if ((condition === "even" && value % 2 === 0) ||
        (condition === "odd" && value % 2 !== 0)) {
      sum += value;
    }
  });
  return sum;
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));