

const raining = true;
//const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");




const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

const temperature = 12;

if (temperature < 0) {
  console.log("make sure you pick out a scraft");
} else if (temperature < 15){
  console.log("short sleeves wont cut it!");
} else {
  console.log("short sleeves are fine")
}

console.log("now you're ready to go outside")

const isCitizen = true;
const age = 26;

if(isCitizen && age >18) {
  console.log("You are eligble to vote")
}
// The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.


const whichSchool  = function (age) {
  if (age < 13){
    return "Elementary School";
  } else if (age >= 13 && age < 19) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
    }
}

for (i = 13; i < 18; i++) {
  (whichSchool(i)).to.be.equal("Secondary School");
}

console.log("I am 35. Which school should I go to?");
whichSchool(35);
console.log("I am 8. Which school should I go to?");
whichSchool(8);
console.log("I am 14. Which school should I go to?");
whichSchool(14);