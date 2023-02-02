function ageCalculator(name, yearOfBirth,currentYear){
  var x = yearOfBirth;
  var y = currentYear;
  var age = y - x;
  return `${name} is ${age} years old.`;
}

console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));